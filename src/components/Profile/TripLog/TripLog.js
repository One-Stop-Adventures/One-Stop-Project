import React, {Component} from 'react'
import '../Profile.css'
import '../Bio/Bio.css'

import SavedTrips from './Children/SavedTrips';
import TripLogsChild from './Children/TripLogs';
import NewTrip from './Children/NewTrip';

class TripLogs extends Component {
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
      <div className="container">
      <div className='row saved-trip-logs'>

      <SavedTrips />

      {
        this.state.view
      ?
      <TripLogsChild changeView={this.changeView} />
      :
      <NewTrip changeView={this.changeView}/>
      }



      </div>
      </div>
    )
  }
}

export default TripLogs
