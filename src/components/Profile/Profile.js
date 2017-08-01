
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
      <Bio />
      <TripLogs profileParams={this.props.match.params.id}/>
      <Stats />
      </div>
    )
  }
}


export default Profile
