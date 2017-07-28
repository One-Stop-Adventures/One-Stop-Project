import React, {Component} from 'react'

import Nav1 from '../Nav1/Nav1'
import GetStarted from './GetStarted/GetStarted'
import Login from './Login/Login'

class Landing extends Component{
  render(){
    return (
      <div className="landingContainer">
        <Nav1 />
        <div className="row landingRow">
          <Login />
          <GetStarted />
        </div>
      </div>
    )
  }
}


export default Landing
