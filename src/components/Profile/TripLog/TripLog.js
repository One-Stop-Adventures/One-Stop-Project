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
    view: true,
    search: false
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

      <SavedTrips profileParams={this.props.profileParams} />

      {
        this.state.view
      ?
      <TripLogsChild profileParams={this.props.profileParams} changeView={this.changeView} />
      :
      <NewTrip profileParams={this.props.profileParams} changeView={this.changeView}/>
      }

      </div>
      </div>
    )
  }
}

export default TripLogs
