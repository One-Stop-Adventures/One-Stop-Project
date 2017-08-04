import React, { Component } from 'react';
import '../Trips.css'

class TripLogsChild extends Component {
constructor(){
  super()
  this.editTrip = this.editTrip.bind(this)
}
editTrip(){
  this.props.changeView()
}
render(){
  return (
    <div>

    <div className="col-sm-6 list-group trip-logs">
    <button onClick={this.editTrip} className="btn btn-default btn-sm pull-right saved-trips-edit-button"><i className="fa fa-plus" aria-hidden="true"></i></button>
      <h2 className="saved-trips-title">Trip Logs</h2>
    <div className="trip-scroll">
      <button type="button" className="list-group-item">Cras justo odio</button>
      <button type="button" className="list-group-item">Dapibus ac facilisis in</button>
      <button type="button" className="list-group-item">Morbi leo risus</button>
      <button type="button" className="list-group-item">Porta ac consectetur ac</button>
      <button type="button" className="list-group-item">Vestibulum at eros</button>
      <button type="button" className="list-group-item">Morbi leo risus</button>
      <button type="button" className="list-group-item">Porta ac consectetur ac</button>
      <button type="button" className="list-group-item">Vestibulum at eros</button>
      <button type="button" className="list-group-item">Morbi leo risus</button>
      <button type="button" className="list-group-item">Porta ac consectetur ac</button>
      <button type="button" className="list-group-item">Vestibulum at eros</button>
    </div>
    </div>
    </div>
  )
}
}

export default TripLogsChild
