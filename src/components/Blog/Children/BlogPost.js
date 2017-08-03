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

                          <p className="post-meta">Posted by <a>Hunter Harrison</a> on August 7, 2017</p>
                      </div>
                      <hr />

                    </div>

                </div>

                <div className="row">
                <button className="btn btn-default btn-sm pull-right saved-trips-edit-button"><i className="fa fa-trash" aria-hidden="true"></i></button>
                <button  onClick={this.editBlog} className="btn btn-default btn-sm pull-right saved-trips-edit-button"><i className="fa fa-pencil" aria-hidden="true"></i></button>


                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

                        <div className="post-preview">

                                <h2 className="post-title">
                                    Sometimes life is scary and dark
                                </h2>
                                <p className="post-subtitle">
                                    When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light.
                                </p>

                            <p className="post-meta">Posted by <a>Chris Yi</a> on August 4, 2017</p>
                        </div>
                        <hr />

                      </div>

                  </div>

                  <div className="row">
                  <button className="btn btn-default btn-sm pull-right saved-trips-edit-button"><i className="fa fa-trash" aria-hidden="true"></i></button>
                  <button  onClick={this.editBlog} className="btn btn-default btn-sm pull-right saved-trips-edit-button"><i className="fa fa-pencil" aria-hidden="true"></i></button>


                      <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

                          <div className="post-preview">

                                  <h2 className="post-title">
                                      People get built different. We don't need to figure it out, we just need to respect it.
                                  </h2>
                                  <p className="post-subtitle">
                                      Princess Bubblegum gives some very mature insight on respect and humanity by explaining that even though people may be cut from the same cloth, everyone is different, and another's existence shouldn't be questioned, but simply respected. Even though the other person may be a "wet hot dog around everyone.
                                  </p>

                              <p className="post-meta">Posted by <a>Vann Vaughan</a> on August 3, 2017</p>
                          </div>
                          <hr />

                        </div>

                    </div>

                    <div className="row">
                    <button className="btn btn-default btn-sm pull-right saved-trips-edit-button"><i className="fa fa-trash" aria-hidden="true"></i></button>
                    <button  onClick={this.editBlog} className="btn btn-default btn-sm pull-right saved-trips-edit-button"><i className="fa fa-pencil" aria-hidden="true"></i></button>


                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

                            <div className="post-preview">

                                    <h2 className="post-title">
                                        I'll still be here tomorrow to high five you yesterday, my friend.
                                    </h2>
                                    <p className="post-subtitle">
                                    This cosmic dance of bursting decadence and withheld permissions, twists all our arms collectively. But, if sweetness can win, and it can, then I'll still be here tomorrow to high five you yesterday, my friend. Peace.
                                    </p>

                                <p className="post-meta">Posted by <a>Terry Dinh</a> on Augst 2, 2017</p>
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
