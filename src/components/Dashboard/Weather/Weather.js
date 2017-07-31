import React, { Component } from 'react';
import {connect} from 'react-redux'


import {fetchWeather} from '../../../ducks/weather';
import {getWeather} from '../../../ducks/weather_reducer';
// import '../Dashboard.css'

class DashboardWeather extends Component{
  constructor(){
    super()
  }
  componentDidMount(){
    const promise = fetchWeather()
    this.props.getWeather(promise)
  }
  render(){
    return(
      <div className="row">
        <div className="col-xs-12">
          <div className="thumbnail weather">
            <div>
              <h3>Weather info</h3>
            </div>
          </div>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state){
  return{
    data: state.weather.data
  }
}
const mapDispatchToProps = {
  getWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardWeather);
