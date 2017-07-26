import React, { Component } from 'react';
import "../Landing.css"

class Login extends Component {
  render(){
    return (
      <div className="col-xs-12 col-s-12 col-md-6">
        <div className="thumbnail landing">
          <div className="caption">
            <h1 className="landingFontColor">Login</h1>
            <form className="navbar-form">
            <input className="form-control landingInput" placeholder="Username"/>
            <br />
            <input className="form-control landingInput" placeholder="Password"/>
            </form>
            <p><a className="btn btn-default btn-sm" role="button">Login</a> <a className="btn btn-default btn-sm" role="button">Sign-Up</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
