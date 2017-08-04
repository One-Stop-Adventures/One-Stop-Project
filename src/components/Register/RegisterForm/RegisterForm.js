import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {registrationSubmit} from '../../../actions/register/Register'
import '../Register.css'
import { connect } from 'react-redux'
import { fetchUser } from '../../../ducks/profile_reducer'

class RegisterForm extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      email: '',
      password: '',
      confirm: ''
    };
  }

  createUsername(e){
    this.setState({username: e})

  }
  createEmail(e){
    this.setState({email: e})

  }
  createPassword(e){
    this.setState({password: e})

  }
  createConfirm(e){
    this.setState({confirm: e})

  }
  submitRegistration(){
    registrationSubmit(this.state)
    .then(response => {
      let id = response.data.id
      this.props.fetchUser(id)
    })

  }
  componentWillReceiveProps( nextProps ){
    let id = nextProps.profile.user.id
    if( id ) {
      this.props.history.push( `profile/${id}` )
    }
  }
  render(){
    return (
      <div className="registerBackground">
        <div className="col-md-6 col-md-offset-3 formWrapper">
          <div className="thumbnail registration col-sm-12">


          <h1 className="registrationTitle">Registration</h1>

          <div className="form-group input-wrapper">
              <label>Username</label>
              <input onChange={e => this.createUsername(e.target.value)} className="form-control register-textbox" placeholder="Username" />
          </div>
          <div className="form-group input-wrapper">
              <label>Email</label>
              <input onChange={e => this.createEmail(e.target.value)} type="email" className="form-control register-textbox" placeholder="Email" />
          </div>

          <div className="form-group input-wrapper">
                <label>Password</label>
                <input onChange={e => this.createPassword(e.target.value)} type="password" className="form-control register-textbox" placeholder="Password" />
          </div>

          <div className="form-group input-wrapper">
                <label>Confirm Password</label>
                <input onChange={e => this.createConfirm(e.target.value)} type="password" className="form-control register-textbox" placeholder="Confirm Password" />
          </div>

          <button onClick={() => this.submitRegistration()}type="submit" className="btn btn-default">Sign Up!</button>


          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect( state => state, {fetchUser} )(RegisterForm))
