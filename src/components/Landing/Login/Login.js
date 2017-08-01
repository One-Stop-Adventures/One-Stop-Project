import React, { Component } from 'react';
// import history from '../../../history'
import {withRouter, Link} from 'react-router-dom'
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
        let id = response.data.id
        this.props.history.push(`/profile/${id}`)
      }
    })
  }
  render(){
    console.log(withRouter)
    return (

      <div className="col-xs-12 col-md-6">
        <div className="thumbnail landing">
            <form className="navbar-form">
            <h1 className="landingFontColor">Login</h1>

            <input onChange={(e)=>this.updateUsername(e.target.value)} className="form-control loginUsername" placeholder="Username"/>
            <br />
            <input onChange={(e)=>this.updatePassword(e.target.value)} className="form-control " placeholder="Password" type='password'/>

            <p><a onClick={()=>this.submitLogin()} className="btn btn-default btn-sm" role="button">Login</a> <Link to="/register" className="btn btn-default btn-sm" role="button">Sign-Up</Link></p>
            </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
