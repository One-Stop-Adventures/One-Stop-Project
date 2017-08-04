import React, {Component} from 'react'
import RegisterForm from './RegisterForm/RegisterForm'
import Nav1 from '../Nav1/Nav1'
import Footer from '../Footer/Footer'
import './Register.css'


class Register extends Component {
  render(){
    return (
      <div className="register-container">
      <Nav1 />
      <div className="row registerRow">
      <RegisterForm />
      </div>
      <Footer />
      </div>
    )
  }
}

export default Register
