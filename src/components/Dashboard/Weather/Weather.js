import React, { Component } from 'react';
// import '../Dashboard.css'

class DashboardWeather extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-xs-12">
          <div className="thumbnail weather">
            <div>
              <h3>Weather info for Denver, Colorado</h3>
            </div>
          </div>
      </div>
    </div>
    )
  }
}

export default DashboardWeather;
