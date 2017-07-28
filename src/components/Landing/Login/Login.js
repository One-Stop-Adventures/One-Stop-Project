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
      <div>
        <a href="http://localhost:4000/auth/facebook">Facebook</a>
        <a href="http://localhost:4000/auth/google">Google</a>
      </div>
    )
  }
}

export default withRouter(Login);
