import React from 'react';
import {Link} from 'react-router-dom';
import Media from 'react-media';

import './Nav1.css'

const Nav1 = () => {
  return(
    <nav className='navbar navbar-default nav-custom'>
    <div className="container-fluid nav-container">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>


        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <div>
            <ul className="nav navbar-nav pull-right">
                <li className="nav-links"><Link to='Shop'>Shop</Link></li>
                <li className="nav-links"><Link to='About'>About</Link></li>
                <li className="nav-links-1"><Link to='Blog'>Blog</Link></li>
            </ul>
          </div>
        </div>
    </div>
  </nav>
  )
}

export default Nav1;
