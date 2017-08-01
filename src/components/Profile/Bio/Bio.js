import React, {Component} from 'react'

import Viewbio from './Children/ViewBio'
import Editbio from './Children/EditBio'

import '../Profile.css'
import './Bio.css'

class Bio extends Component {
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
    return (
      <div className='bio'>


        <div className="row profile-info">

        <div className="col-xs-6 col-md-4 prof-box">
        <a className="profile-pic">
          <div className="profile-pic">
          <span className="glyphicon glyphicon-camera cam-icon"></span>
          <span>Change Image</span>
          </div>
        </a>
        </div>


        {
        this.state.view
        ?
        <Viewbio changeView={this.changeView}/>
        :
        <Editbio changeView={this.changeView}/>
        }




        </div>











      </div>
    )
  }

}

export default Bio
