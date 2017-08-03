import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render(){
    return (
      <div className='col-sm-12 footer-footer'>
      <ul className="col-sm-1 col-sm-1 footerLinks footer-link-2">
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <ul className="col-sm-1 col-sm-1 footerLinks footer-link-2">
        <li>Profile</li>
        <li>Dashboard</li>
        <li>Careers</li>
      </ul>
      <ul className="col-sm-1 col-sm-1 footerLinks footer-link-2">
        <li>Jobs</li>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
      <ul className="col-sm-3 col-sm-3 pull-right footerLinks social">
        <li><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
        <li><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></li>
        <li><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
      </ul>
      </div>
    )
  }
}

export default Footer;
