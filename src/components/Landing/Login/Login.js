import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import history from '../../../history'
import {withRouter} from 'react-router-dom'
import "../Landing.css"

import {UserLogin} from '../../../actions/Login/Login'

class Login extends Component {
  constructor(){
    super()
    this.state={
      username: '',
      password: ''
    }
  }
  updateUsername(e){
    this.setState({username: e})
  }
  updatePassword(e){
    this.setState({password: e})
  }
  submitLogin(){
    console.log(this.state)
    let user = this.state
    UserLogin(user)
    .then(response => {
      console.log(response)
      if(response.data.message === 'Incorrect Username' || response.data.message === 'Incorrect Password'){
        alert('Incorrect Username or Password. Please try again.')
      }
      else{
        let username = response.data.username
        console.log(username)
        this.props.history.push(`/dashboard/${username}`)
      }
    })
  }
  render(){
    console.log(withRouter)
    return (
      <div className="col-xs-12 col-s-12 col-md-6">
        <div className="thumbnail">
          <div className="caption">
            <h1>Login</h1>
            <form className="navbar-form">
            <input onChange={(e)=>this.updateUsername(e.target.value)} className="form-control" placeholder="Username"/>
            <br />
            <input onChange={(e)=>this.updatePassword(e.target.value)} className="form-control" placeholder="Password" type='password'/>
            </form>
            <p><a onClick={()=>this.submitLogin()} className="btn btn-default btn-sm" role="button">Login</a> <a className="btn btn-default btn-sm" role="button">Sign-Up</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
