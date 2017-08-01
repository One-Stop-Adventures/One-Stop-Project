import React, {Component} from 'react'


class Viewbio extends Component {
  constructor(){
    super()
    this.editProfile = this.editProfile.bind(this)
  }
  editProfile(){
    this.props.changeView()
  }
  render() {
    return (
      <div>
      <div className="col-xs-6 col-md-4 profile-view">
      <div className="well profile-well">
      <label className="bio-underline">Profile Information:</label>
        <p>First Name: firstname</p>
        <p>Last Name: lastname</p>
        <p>Location: location</p>
        <p>DOB: DOB</p>
      </div>
      </div>

      <div className="well col-xs-6 col-md-4 bio-show">
      <button onClick={this.editProfile} className="btn btn-default btn-sm pull-right edit-profile-button"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>

      <label className="control-label bio-underline">Biography:</label>
        <p className="biography-box">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      </div>
    )
  }
}

export default Viewbio
