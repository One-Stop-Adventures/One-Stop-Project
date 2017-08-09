import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

import './Nav2.css'

const Nav2 = () => {
  return(
    <nav className='navbar navbar-default nav-customs'>
      <div className="navbar-header page-scroll brand-2">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          Menu <i className="fa fa-bars"></i>
        </button>

        <Link to={'/'}><p className="brand">One Stop Adventure</p></Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li className="nav2-links"><Link to={'/shop'}><strong>Shop</strong></Link></li>
            <li className="nav2-links"><Link to={'/about'}><strong>About</strong></Link></li>
            <li className="nav2-links"><Link to={'/blog'}><strong>Blog</strong></Link></li>
            <li className="nav2-links"><Link to={`/profile`}><strong>Profile</strong></Link></li>
            <li className="nav2-links-1"><strong>Logout</strong></li>
          </ul>
        </div>
    </nav>

  )
}

export default Nav2;
