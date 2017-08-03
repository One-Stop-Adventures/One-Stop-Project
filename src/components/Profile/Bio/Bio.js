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


        <div className="container profile-info">

      <div className="pic-container">

        <div className="prof-box">
        <a className="profile-pic">
          <div className="profile-pic">
          <span className="glyphicon glyphicon-camera cam-icon"></span>
          <span>Change Image</span>
          </div>
        </a>
        </div>
</div>

        {
        this.state.view
        ?
        <Viewbio profileParams={this.props.profileParams}  changeView={this.changeView}/>
        :
        <Editbio profileParams={this.props.profileParams} changeView={this.changeView}/>
        }




        </div>











      </div>
    )
  }

}

export default Bio
