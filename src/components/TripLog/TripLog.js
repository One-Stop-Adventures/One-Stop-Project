import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchLog } from "../../ducks/log_reducer";

import Nav2 from "../Nav2/Nav2";
import Footer from "../Footer/Footer";
import "./TripLog.css";

class TripLog extends Component {
  componentDidMount() {
    this.props.fetchLog(this.props.match.params.id);
  }
  render() {
    const logData = this.props.log.map(info => {
      return (
        <div>
          <h1>Trip Log for your trip:</h1>
          <h2>
            {info.name}
          </h2>
          <h5>
            {info.city}, {info.state}
          </h5>
          <h5>
            {info.description}
          </h5>
          <h5>
            {" "}Total Distance: {info.total_distance} miles{" "}
          </h5>
        </div>
      );
    });
    console.log(this.props);
    return (
      <div>
        <Nav2 />
        <div className="container-fluid backgroundtrip">
          <div className="row triprow">
            {logData}
          </div>
        </div>
        <div className="tripfooter">
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    log: state.tripLog.log
  };
}

const mapDispatchToProps = {
  fetchLog
};
export default connect(mapStateToProps, mapDispatchToProps)(TripLog);
