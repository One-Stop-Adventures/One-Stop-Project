
import React, {Component} from 'react'
import Nav2 from '../Nav2/Nav2'
import Bio from './Bio/Bio'
import TripLogs from './TripLog/TripLog'
import Stats from './Stats/Stats'
import './Profile.css'

class Profile extends Component {
  render(){
    return (
      <div>
      <Nav2 />
      <header className="profile-header-pic">
      <Bio profileParams={this.props.match.params.id} />
      <TripLogs profileParams={this.props.match.params.id} />
      <Stats />
      </header>
      </div>
    )
  }
}


export default Profile
