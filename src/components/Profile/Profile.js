
import React, {Component} from 'react'
import Nav2 from '../Nav2/Nav2'
import Bio from './Bio/Bio'
import TripLogs from './TripLog/TripLog'
import Stats from './Stats/Stats'
import './Profile.css'
import Footer from '../Footer/Footer';
import Banner from './banner3.png'


class Profile extends Component {
  render(){
    return (
      <div>
      <Nav2 />

      
      <a href="https://devmountain.com/dallas-bootcamp">
      <img id="banner" src={Banner} alt="..." />
      </a>
      <header className="profile-header-pic">
      <Bio profileParams={this.props.match.params.id}/>
      <TripLogs profileParams={this.props.match.params.id}/>
      <Stats />
      <Footer />
      </header>
      </div>
    )
  }
}


export default Profile
