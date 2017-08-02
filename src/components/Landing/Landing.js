import React, {Component} from 'react'

import Nav1 from '../Nav1/Nav1'
import GetStarted from './GetStarted/GetStarted'
import Login from './Login/Login'

class Landing extends Component{
  render(){
    return (
      <div className="background">
        <Nav1 />
        <h1 className="landing-title">One-Stop-Adventure</h1>
        <Login />
        <GetStarted />

      </div>
    )
  }
}


export default Landing
