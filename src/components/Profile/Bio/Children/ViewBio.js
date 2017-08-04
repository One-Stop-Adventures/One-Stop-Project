import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchUser} from '../../../../ducks/profile_reducer'


class Viewbio extends Component {
  constructor(){
    super()
    this.editProfile = this.editProfile.bind(this)
  }
  editProfile(){
    this.props.changeView()
  }
  componentWillMount(){
    this.props.fetchUser(this.props.profileParams)
  }
  render() {
    const {user} = this.props
      const userData = (
          <div className="profile-well">
            <button onClick={this.editProfile} className="btn btn-default btn-sm button-profile"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <h2 className="profile-title">{user.first_name} {user.last_name}</h2>
            <h2 className="profile-title">{user.city}, {user.state}</h2>

              {
                !user.bio
                ?
                <p className="biography-box">Tell us a little about yourself! Add a bio...</p>
                :
                <p className="biography-box">{user.bio}</p>
              }
              </div>
        )
    return (
      <div>
      <div className="col-md-6 col-md-offset-3 profile-view">
          {userData}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
   return{
     user: state.profile.user
   }
 }
 const mapDispatchToProps = {
   fetchUser
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Viewbio)
