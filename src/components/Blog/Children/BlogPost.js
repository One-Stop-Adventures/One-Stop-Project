import React, { Component } from 'react';

import AddBlogPost from './AddBlogPost';

class BlogPost extends Component {
  constructor(){
    super()
    this.editBlog = this.editBlog.bind(this)
  }
  editBlog(){
    this.props.changeView()
  }

  render(){
    return(
      <div>
      <div className="container">
              <div className="row">
              <button className="btn btn-default btn-sm pull-right saved-trips-edit-button"><i className="fa fa-trash" aria-hidden="true"></i></button>
              <button className="btn btn-default btn-sm pull-right saved-trips-edit-button"><i className="fa fa-pencil" aria-hidden="true"></i></button>
              <button  onClick={this.editBlog} className="btn btn-default btn-sm pull-right saved-trips-edit-button"><i className="fa fa-plus" aria-hidden="true"></i></button>


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



                    </div>
                </div>
              </div>


      </div>
    )
  }
}
 export default BlogPost;
