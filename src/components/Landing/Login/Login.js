import React, { Component } from 'react';
// import history from '../../../history'
import {withRouter, Link} from 'react-router-dom'
import "../Landing.css"
import { connect } from 'react-redux'
import { fetchUser } from '../../../ducks/profile_reducer'

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
    let user = this.state
    UserLogin(user)
    .then(response => {
      let id = response.data.id
      if(response.data.message === 'Incorrect Username' || response.data.message === 'Incorrect Password'){
        alert('Incorrect Username or Password. Please try again.')
      }
      else{
        this.props.fetchUser(id)
      }
    })
  }
  componentWillReceiveProps( nextProps ){
    let id = nextProps.profile.user.id
    if( id ){
      this.props.history.push(`profile/${id}`)
    }
  }
  render(){
    return (

      <div className="col-xs-12 col-md-6">
        <div className="thumbnail landing">
            <form className="navbar-form">
            <h1 className="landingFontColor">Start Planning</h1>

            <input onChange={(e)=>this.updateUsername(e.target.value)} className="form-control username-bar" placeholder="Username"/>
            <br />
            <input onChange={(e)=>this.updatePassword(e.target.value)} className="form-control password-bar" placeholder="Password" type='password'/>

            <p><a onClick={()=>this.submitLogin()} className="btn btn-default btn-sm" role="button">Login</a> <Link to="/register" className="btn btn-default btn-sm" role="button">Sign-Up</Link></p>
            </form>
        </div>
      </div>
    )
  }
}

export default withRouter(connect( state => state, {fetchUser} )(Login))
