import React, { Component } from 'react'


import Nav2 from '../Nav2/Nav2'
import DashboardWeather from './Weather/Weather'
import ToDo from './Todo/Todo'
import Calendar from './Calendar/Calendar'
import PackingList from './PackingList/PackingList'
import Meals from './Meals/Meals'

import './Dashboard.css'

class Dashboard extends Component{
  render(){
    return(
      <div>
        <Nav2></Nav2>
        <div className="jumbotron">
          <h1>Hello cNasty! Welcome to your dashboard!</h1>
          <h3>Lets plan your next adventure!</h3>
          <DashboardWeather className="weather"/>
        </div>
        <div className="container">
        <div className="row dash-row">
          <ToDo className="col-xs-4 col-md-4" dashboardParams={this.props.match.params.id}/>
          <PackingList className="col-xs-4 col-md-4"/>
          <Meals className="col-xs-6 col-md-4"/>
        </div>
        </div>
          <Calendar />
      </div>
    )
  }
}


export default Dashboard
