import React, { Component } from 'react';
import "../Landing.css"

class Login extends Component {
  render(){
    return (
      <div className="col-sm-6 col-md-6">
        <div className="thumbnail">
          <div className="caption">
            <h1>Login</h1>
            <form>
            <input placeholder="Username"/>
            <br />
            <input placeholder="Password"/>
            </form>
            <p><a className="btn btn-default" role="button">Login</a> <a className="btn btn-default" role="button">Sign-Up</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
