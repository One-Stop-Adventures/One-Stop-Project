import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render(){
    return (

      <nav className='navbar navbar-default navbar-static-bottom footer'>
        <ul className="col-sm-1 col-sm-1 footerLinks">
          <li>About</li>
          <li>Blog</li>
          <li>Contract</li>
        </ul>
        <ul className="col-sm-1 col-sm-1 footerLinks">
          <li>Profile</li>
          <li>Dashboard</li>
          <li>Careers</li>
        </ul>
        <ul className="col-sm-3 col-sm-3 pull-right footerLinks">
          <li><i className="fa fa-facebook-square" aria-hidden="true"></i></li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>

      </nav>
    )
  }
}

export default Footer;
