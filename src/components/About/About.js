import React, {Component} from 'react';
import Nav2 from '../Nav2/Nav2'
import './About.css'
import '../../img/aboutmemission2.jpg'

class About extends Component{
  render(){
    return(
      <div>
        <Nav2 />
        <div className="container about-title">
        <div className="row">

        <div className="jumbotron about-jumbotron">
        <h1>About Us</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h3>
        </div>
        </div>
        </div>

        <div className="container about-title-2">
        <div className="row">

        <div className="jumbotron about-jumbotron-2">
        <h1>Our Mission</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h3>
        </div>
        </div>
        </div>

        <div className="container-fluid about-title-3">
        <div className="jumbotron about-jumbotron-3">
        <h1 className='creator-title'>Our Creators</h1>
          <div className="row about-creators">
              <div className="col-sm-3 col-md-4">
                <div className="thumbnail thumb-color">
                <img src="..." />
                <div className="caption">
                <h3>Hunter Harrison</h3>
                <p>Project Manager</p>
                </div>
                </div>
              </div>


              <div className="col-sm-3 col-md-4">
                <div className="thumbnail thumb-color">
                <img src="..." alt="..." />
                <div className="caption">
                <h3>Terry Dinh</h3>
                <p>The Best</p>

                </div>
                </div>
              </div>


              <div className="col-sm-3 col-md-4">
                <div className="thumbnail thumb-color">
                <img src="..." alt="..." />
                <div className="caption">
                <h3>Vann Vaughan</h3>
                <p>The Best</p>

                </div>
                </div>
              </div>


              <div className="col-sm-3 col-md-4">
                <div className="thumbnail thumb-color">
                <img src="..." alt="..." />
                <div className="caption">
                <h3>Chris Yi</h3>
                <p>The Best</p>

                </div>
                </div>
              </div>

              </div>
          </div>
        </div>


      </div>
    )
  }

}


export default About;
