import React, {Component} from 'react'

import Nav1 from '../Nav1/Nav1'
import GetStarted from './GetStarted/GetStarted'
import Login from './Login/Login'
import Footer from '../Footer/Footer'


class Landing extends Component{
  render(){
    return (
      <div className="background">
        <Nav1 />
        <h1 className="landing-title">WELCOME</h1>
        <h1 className="landing-title-2"> ONE STOP ADVENTURERS!</h1>
          <div className="landing-list">
            <div>
              <p className="glyphicon glyphicon-calendar landing-icons" aria-hidden="true"></p>
              <p className="landing-caption">Plan your adventures!</p>
            </div>
            <div>
              <p className="glyphicon glyphicon-book landing-icons" aria-hidden="true"></p>
              <p className="landing-caption">Keep track of your expeditions!</p>
            </div>
            <div>
              <p className="glyphicon glyphicon-user landing-icons" aria-hidden="true"></p>
              <p className="landing-caption">Connect with other adventurers!</p>
            </div>
          </div>
          
        <Login />
        <GetStarted />
        <Footer />
      </div>
    )
  }
}


export default Landing
