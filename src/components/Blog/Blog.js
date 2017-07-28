import React, {Component} from 'react'
import Nav2 from '../Nav2/Nav2'
import './Blog.css'


class Blog extends Component{
  render(){
    return(
      <div>
      <Nav2 />

      <header className="intro-header blog-header-pic">
      <div className="container">
          <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                  <div className="site-heading">
                      <h1 className="blog-title">Adventure Blog Time</h1>
                      <hr className="small" />
                    <span className="subheading">Sucking at something is the first step towards being sorta good at something.</span>
                  </div>
              </div>
          </div>
      </div>
      </header>

      <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

                      <div className="post-preview">

                              <h2 className="post-title">
                                  Man must explore, and this is exploration at its greatest
                              </h2>
                              <p className="post-subtitle">
                                  Problems look mighty small from 150 miles up
                              </p>

                          <p className="post-meta">Posted by <a>Start Bootstrap</a> on September 24, 2014</p>
                      </div>
                      <hr />


                      <div className="post-preview">

                              <h2 className="post-title">
                                  Science has not yet mastered prophecy
                              </h2>
                              <p className="post-subtitle">
                                  We predict too much for the next year and yet far too little for the next ten.
                              </p>

                          <p className="post-meta">Posted by <a>Start Bootstrap</a> on August 24, 2014</p>
                      </div>
                      <hr />


                      <div className="post-preview">

                              <h2 className="post-title">
                                  Failure is not an option
                              </h2>
                              <p className="post-subtitle">
                                  Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                              </p>

                          <p className="post-meta">Posted by <a>Start Bootstrap</a> on July 8, 2014</p>
                      </div>
                      <hr />

                    </div>
                </div>
              </div>



      </div>
    )
  }
}

export default Blog;
