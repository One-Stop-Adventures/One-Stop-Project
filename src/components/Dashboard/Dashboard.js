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
        <h1>Hello cNasty! Welcome to your dashboard!</h1>
        <h3>Lets plan your next adventure!</h3>
        <div className='dashboardComponents'>
          <DashboardWeather />
          <ToDo />
          <Calendar />
          <div>
            <PackingList />
            <Meals />
          </div>
        </div>
      </div>
    )
  }
}


export default Dashboard
