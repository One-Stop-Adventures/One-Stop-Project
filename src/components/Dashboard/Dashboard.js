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
    console.log(response)
    const res = await axios.get(`/api/weather/${response.value.data.city}/${response.value.data.state}`)
    this.setState({weatherInfo: res.data.forecast.simpleforecast.forecastday})
  }
  render(){
    const tripData = this.props.trip
    // for(let i = 0; i < this.props.trip.length; i++){
    //   tripData.name = this.props.trip[i].trip_name;
    //   tripData.city = this.props.trip[i].city;
    //   tripData.state = this.props.trip[i].state;
    // }
    console.log(this.props.trip)
    return(
      <div>
        <Nav2></Nav2>
        <div className="jumbotron dashboard-jumbotron">
          <h1>Hello {tripData.first_name}, welcome to your  dashboard</h1>
          <h3>Lets plan your trip:</h3>
          <h2>{tripData.name}</h2>
          <DashboardWeather city={tripData.city} state={tripData.state} weatherInfo={this.state.weatherInfo} className="weather"/>
        </div>
        <div className="container">
        <div className="row dash-row">
          <ToDo className="col-xs-4 col-md-4" dashboardParams={this.props.match.params.id}/>
          <PackingList className="col-xs-4 col-md-4" dashboardParams={this.props.match.params.id}/>
          <Meals className="col-xs-6 col-md-4" dashboardParams={this.props.match.params.id}/>

        </div>
        </div>
          <Calendar dashboardParams={this.props.match.params.id} />
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
