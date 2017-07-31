import React, {Component} from 'react'
import Nav2 from '../Nav2/Nav2'
import './Blog.css'
import BlogPost from './Children/BlogPost'
import AddBlogPost from './Children/AddBlogPost';


class Blog extends Component{
  constructor(){
    super();
    this.state = {
      view: true
    };
    this.changeView = this.changeView.bind(this)
  }

  changeView(){
    this.setState({view: !this.state.view})
  }

  render(){
    return(
      <div>
      <Nav2 />

      <header className="intro-header blog-header-pic">
      <div className="container-fluid">
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

      {
        this.state.view
      ?
      <BlogPost changeView={this.changeView} />
      :
      <AddBlogPost changeView={this.changeView}/>
      }


      </div>
    )
  }
}

export default Blog;
