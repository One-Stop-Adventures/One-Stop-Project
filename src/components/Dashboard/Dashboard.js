import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import {fetchTrip} from '../../ducks/trip.js'

import Nav2 from '../Nav2/Nav2'
import Footer from '../Footer/Footer'
import DashboardWeather from './Weather/Weather'
import ToDo from './Todo/Todo'
import Calendar from './Calendar/Calendar'
import PackingList from './PackingList/PackingList'
import Meals from './Meals/Meals'

import './Dashboard.css'

class Dashboard extends Component{
  constructor(){
    super()
    this.state = {
      weatherInfo: []
    }

  }
  async componentDidMount(){
    const response = await this.props.fetchTrip(this.props.match.params.id)
    const res = await axios.get(`/api/weather/${response.value.data[0].city}/${response.value.data[0].state}`)
    console.log(res);
    this.setState({weatherInfo: res.data.forecast.simpleforecast.forecastday})
  }
  render(){
    const tripData = {}
    for(let i = 0; i < this.props.trip.length; i++){
      tripData.name = this.props.trip[i].trip_name;
      tripData.city = this.props.trip[i].city;
      tripData.state = this.props.trip[i].state;
    }
      console.log(this.state.weatherInfo)
    return(
      <div>
        <Nav2></Nav2>
        <div className="jumbotron">
          <h1>Hello cNasty, welcome to your  dashboard</h1>
          <h3>Lets plan your trip:</h3>
          <h2>{tripData.name}</h2>
          <DashboardWeather weatherInfo={this.state.weatherInfo} className="weather"/>
        </div>
        <div className="container">
        <div className="row dash-row">
          <ToDo className="col-xs-4 col-md-4" dashboardParams={this.props.match.params.id}/>
          <PackingList className="col-xs-4 col-md-4" dashboardParams={this.props.match.params.id}/>
          <Meals className="col-xs-6 col-md-4" dashboardParams={this.props.match.params.id}/>

        </div>
        </div>
          <Calendar />
          <Footer />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    trip: state.trip.trips
  }
}

const mapDispatchToProps = {
  fetchTrip
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
