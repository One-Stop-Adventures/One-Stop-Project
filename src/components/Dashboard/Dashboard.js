import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
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
      weatherInfo: [],
      completingTrip: false,
      td: null,
      notes: ''
    }
    this.completeTrip = this.completeTrip.bind(this)
    this.updateDistance = this.onInputChange.bind(this, 'td')
    this.updateNotes = this.onInputChange.bind(this, 'notes')
    this.finishTrip = this.finishTrip.bind(this)
  }
  async componentDidMount(){
    const response = await this.props.fetchTrip(this.props.match.params.id)
    console.log(response)
    const res = await axios.get(`/api/weather/${response.value.data.city}/${response.value.data.state}`)
    this.setState({weatherInfo: res.data.forecast.simpleforecast.forecastday})
  }
  completeTrip(){
    this.setState({completingTrip: !this.state.completingTrip})
  }
  onInputChange(value, e){
    this.setState({[value]: e.target.value})
  }
  finishTrip(e){
    e.preventDefault()
    const completedTrip = {
      trip_id: this.props.trip.id,
      name: this.props.trip.trip_name,
      city: this.props.trip.city,
      state: this.props.trip.state,
      total_distance: this.state.td,
      notes: this.state.notes,
      start_date: this.props.trip.start_date,
      end_date: this.props.trip.end_date,
      user_id: this.props.match.params.userid,
      description: this.props.trip.description
    }
    console.log(completedTrip)
    axios.post('/api/user/log', completedTrip)
    .then(response=>{
      axios.delete(`/api/user/${this.props.match.params.userid}/trips/${this.props.match.params.id}`)
      alert('Your trip has been added to your log!')
      this.props.history.push(`/profile/${this.props.match.params.userid}`)
    })
  }
  render(){
    console.log(this.props.trip)
    const tripData = this.props.trip
    // for(let i = 0; i < this.props.trip.length; i++){
    //   tripData.name = this.props.trip[i].trip_name;
    //   tripData.city = this.props.trip[i].city;
    //   tripData.state = this.props.trip[i].state;
    // }
    return(
      <div>
        <Nav2 userId={this.props.match.params.userid}></Nav2>
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
          {
            !this.state.completingTrip
            ?
            <button onClick={this.completeTrip} type='button' className='btn btn-default col-xs-6 col-xs-offset-3 complete-trip btn-success'>Complete Trip</button>
            :
            <form onSubmit={this.finishTrip} className='col-xs-6 col-xs-offset-3 complete-trip-form'>
              <div className='form-group'>
                <label>Total Distance</label>
                <input value={this.state.td} onChange={this.updateDistance} type='number' className='form-control' placeholder='Total Distance in miles' />
              </div>
              <div className='form-group'>
                <label>Notes:</label>
                <textarea value={this.state.notes} onChange={this.updateNotes} type='text' className='form-control' placeholder='Thoghts about your trip...' />
              </div>
              <button type='submit' className='btn btn-success submit-trip'>Submit</button>
              <button className='btn btn-danger' onClick={this.completeTrip}>Cancel</button>
            </form>
          }

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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
