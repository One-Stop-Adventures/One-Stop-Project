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
      <div className="col-md-6 col-md-offset-3 profile-view">
      <div className="profile-well">
        <button onClick={this.editProfile} className="btn btn-default btn-sm button-profile"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
        <h2 className="profile-title">Vann Vaughan</h2>
        <h2 className="profile-title profile-location">Dallas, Texas</h2>
        <p className="biography-box">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Viewbio
