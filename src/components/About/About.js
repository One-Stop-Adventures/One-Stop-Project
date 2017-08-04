import React, {Component} from 'react';
import Nav2 from '../Nav2/Nav2'
import './About.css'
import Vann from './vann.jpg'
import Hunter from './Hunter.jpg'
import Chris from './chris.jpg'
import Terry from './Terry.jpg'

import Footer from '../Footer/Footer'

class About extends Component{
  render(){
    return(
      <div>
        <Nav2 />
        <h1 className="about-title">About Us</h1>
      <div className="container container-text">

          <div className="col-xs-12 col-md-3">
            <div className="thumbnail">
              <img src={Hunter} alt="..." />
                <div className="caption">
                  <h3>Hunter Harrison</h3>
                  <a href="https://github.com/hscottharrison" target="_blank" className="about-git"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                  <a href="https://www.linkedin.com/in/hunterscottharrison/" target="_blank" className="about-link"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-3">
            <div className="thumbnail">
              <img src={Vann} alt="..." />
                <div className="caption">
                  <h3>Vann Vaughan</h3>
                  <a href="https://github.com/vannvaughan" target="_blank" className="about-git"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                  <a href="https://www.linkedin.com/in/vann-vaughan/" target="_blank" className="about-link"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-3">
            <div className="thumbnail">
              <img src={Chris} alt="..." />
                <div className="caption">
                  <h3>Chris Yi</h3>
                  <a href="https://github.com/chrisyi" target="_blank" className="about-git"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                  <a className="about-link"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-3">
            <div className="thumbnail">
              <img src={Terry} alt="..." />
                <div className="caption">
                  <h3>Terry Dinh</h3>
                  <a href="https://github.com/tedinh" target="_blank" className="about-git"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                  <a href="https://www.linkedin.com/in/terryqdinh/" target="_blank" className="about-link"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                </div>
            </div>
          </div>
      </div>
      <div className="container about-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <h1 className="about-title-2">Our Mission</h1>
      <div className="container">
      <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br />
      <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <h1 className="about-title-2">Contact Us</h1>
      <div className="container">
      <form className="about-form">
        <div className="form-group">
        <h2 className="about-title-3">How can we help you?</h2>
        <p className="about-text">We’ve worked on a variety of projects with a wide range of clients. Our best and favorite work comes when we’re challenged with unique problems that we can solve through design and development. Whether you’re an enterprise company looking to breathe life into an existing product, or a startup wanting to make an impact with your new app, we’d love to help tackle whatever challenge you throw at us.</p>
        <br />
        <p className="about-text">Give us a call at 000-000-0000 or shoot us an email below!</p>
        <br />
          <label>Name</label>
          <input type="name" className="form-control" placeholder="Name" />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Notes</label>
          <textarea className="form-control about-textarea" rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-default btn-sm">Submit</button>
      </form>
      </div>

    <div className="container-fluid about-background">
      <div className="col-md-6 col-md-offset-3 about-info">
      <div className="form-group">
        <h3 className="about-location">Dallas</h3>
        <p className="about-text-1">500 S. Ervay St.</p>
        <p className="about-text-1">Dallas, TX 75201</p>
      </div>
      </div>
    </div>


        <Footer />
      </div>
    )
  }

}


export default About;
