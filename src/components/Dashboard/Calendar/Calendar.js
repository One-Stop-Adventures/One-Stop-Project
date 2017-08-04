import React from "react";
import ReactDOM from "react-dom";
import DayPicker, { DateUtils } from "react-day-picker";
import moment from "moment";
import axios from "axios";
import { withRouter } from "react-router-dom";
// import {editCalendar} from '../../../ducks/calendar'
import "react-day-picker/lib/style.css";

function Weekday({ weekday, className, localeUtils, locale }) {
  const weekdayName = localeUtils.formatWeekdayLong(weekday, locale);
  return (
    <div className={className} title={weekdayName}>
      {weekdayName.slice(0, 1)}
    </div>
  );
}

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      //selectedDay: null,
      from: null,
      to: null,
      fromDate: null,
      toDate: null
    };
  }
  componentDidMount() {
    // make a db call and see what dates are selected (if any)
    // setState
    axios
      .get(`/api/dashboard/${this.props.dashboardParams}/calendar`)
      .then(response => {
        console.log(response);

        const fromDate = formatDate(response.data.start_date);
        const toDate = formatDate(response.data.end_date);

        this.setState(
          {
            fromDate,
            toDate
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  handleDayClick = (day, ...rest) => {
    const range = DateUtils.addDayToRange(day, this.state);
    range.fromDate = formatDate(range.from);
    range.toDate = formatDate(range.to);

    this.setState(range, () => {
      axios
        .put(`/api/dashboard/${this.props.dashboardParams}/calendar`, {
          fromDate: this.state.from,
          toDate: this.state.to
        })
        .then(response => {
          console.log(response);
        });
    });
    // send to db
  };
  handleResetClick = e => {
    e.preventDefault();
    this.setState({
      from: null,
      to: null
    });
    axios
      .put(`/api/dashboard/${this.props.dashboardParams}/calendar`, {
        fromDate: null,
        toDate: null
      })
      .then(response => {
        console.log(response);
      });
  };

  render() {
    const { from, to } = this.state;
    //const { selectedDay } = this.state;
    return (
      <div className="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 text-center calendar-container">
        <div className="row">
          <h1>Calendar</h1>
          <div className="col-sm-6 col-sm-offset-3">
            <div className="Range">
              {!from &&
                !to &&
                <p>
                  Please select the <strong>first day</strong>.
                </p>}
              {from &&
                !to &&
                <p>
                  Please select the <strong>last day</strong>.
                </p>}
              {from &&
                to &&
                <p>
                  You chose from {moment(from).format("L")} to{" "}
                  {moment(to).format("L")}
                  .{" "}
                  <a href="." onClick={this.handleResetClick}>
                    Reset
                  </a>
                </p>}
              <DayPicker
                canChangeMonth={true}
                enableOutsideDays
                todayButton="Go to Today"
                selectedDays={[from, { from, to }]}
                onDayClick={this.handleDayClick}
                weekdayElement={<Weekday />}
              />
              <div className="dateRangeSaved">
                Adventure from {this.state.fromDate} - {this.state.toDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function formatDate(date) {
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  const formattedDate = `${month}/${day}/${year}`;
  if (formattedDate === '12/31/1969') {
    return " "
  } else {
    return formattedDate;
  }
}

export default withRouter(Example);
