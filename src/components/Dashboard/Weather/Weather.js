import React, { Component } from 'react';
import {connect} from 'react-redux'


class DashboardWeather extends Component{


  render(){
    const weatherData = this.props.weatherInfo.map(day=>{
      return(
        <div>
          <ul className='list-group weather-list'>
            <li className='list-group-item'>{day.date.monthname_short} {day.date.day}</li>
            <li className='list-group-item'><img className='weather-icon' src={day.icon_url} /></li>
            <li className='list-group-item'>High: {day.high.fahrenheit}</li>
            <li className='list-group-item'>Low: {day.low.fahrenheit}</li>
          </ul>
        </div>
      )
    })
    return(
      <div className="container">

          <div className="thumbnail weather">
            <div>
              <h3>Weather info for {this.props.city}, {this.props.state}</h3>
              <table  className='weather-data-container'>
                {weatherData}
              </table>
            </div>
          </div>

    </div>
    )
  }
}



export default DashboardWeather
