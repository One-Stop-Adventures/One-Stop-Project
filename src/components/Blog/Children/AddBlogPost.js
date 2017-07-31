import React, { Component } from 'react';

import "../Blog.css"

class AddBlogPost extends Component {
  constructor(){
    super()
    this.cancelBlog = this.cancelBlog.bind(this)
  }
  cancelBlog(){
    this.props.changeView()
  }
render(){
  return(
    <div>
    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">


    <div className="add-post-group">

      <div className="form-group add-title">
        <label className="control-label">Title </label>
        <input className="form-control" placeholder="Title" />
      </div>

      <div className="add-post-group">
        <div className="form-group">
          <label className="control-label">Post</label>
          <textarea className="post-body form-control" rows="10" placeholder="Post"></textarea>
        </div>
      </div>


      <div className="add-post-group">
        <div className="form-group">
          <button type="submit" className="btn btn-default post-submit">Post</button>
          <button onClick={this.cancelBlog} className="btn btn-danger">Cancel</button>
        </div>
      </div>

    </div>
    </div>




    </div>
  )
}


}

export default AddBlogPost;
