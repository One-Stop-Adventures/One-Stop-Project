import React, {Component} from 'react'
import '../Register.css'

class RegisterForm extends Component {
  render(){
    return (
      <div className="registerBackground">
        <div className="col-md-6 col-md-offset-3 formWrapper">
          <div className="thumbnail registration col-sm-12">


          <h1 className="registrationTitle">Registration</h1>

          <div className="form-group input-wrapper">
              <label>Username</label>
              <input className="form-control register-textbox" placeholder="Username" />
          </div>
          <div className="form-group input-wrapper">
              <label>Email</label>
              <input type="email" className="form-control register-textbox" placeholder="Email" />
          </div>

          <div className="form-group input-wrapper">
                <label>Password</label>
                <input className="form-control register-textbox" placeholder="Password" />
          </div>

          <div className="form-group input-wrapper">
                <label>Confirm Password</label>
                <input type="password" className="form-control register-textbox" placeholder="Confirm Password" />
          </div>

          <button type="submit" className="btn btn-default">Sign Up!</button>


          </div>
        </div>
      </div>
    )
  }
}

export default RegisterForm
