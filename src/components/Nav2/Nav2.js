import React from 'react';
import {Link} from 'react-router-dom';

import './Nav2.css'

const Nav2 = () => {
  return(
    <nav className='navbar navbar-default nav-custom'>
    <div className="container-fluid">

      <div className="navbar-header page-scroll">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          Menu <i className="fa fa-bars"></i>
        </button>

        <Link to='/' className="navbar-brand"><i className="fa fa-home fa-pulse fa-fw"></i></Link>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to='Dashboard'>Dashboard</Link></li>
            <li><Link to='Shop'>Shop</Link></li>
            <li><Link to='About'>About</Link></li>
            <li><Link to='Blog'>Blog</Link></li>
            <li><Link to='Profile'>Profile</Link></li>
          </ul>
        </div>
    </div>
    </nav>

  )
}

export default Nav2;
