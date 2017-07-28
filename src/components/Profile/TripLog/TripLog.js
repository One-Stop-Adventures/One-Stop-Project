import React, {Component} from 'react'
import '../Profile.css'
import '../Bio/Bio.css'

class TripLogs extends Component {

  render(){
    return (
      <div className="container">
      <div className='row saved-trip-logs'>


      <div className="col-sm-6 list-group saved-trips">

        <h2>Saved Trips</h2>
        <button type="button" className="list-group-item">Cras justo odio</button>
        <button type="button" className="list-group-item">Dapibus ac facilisis in</button>
        <button type="button" className="list-group-item">Morbi leo risus</button>
        <button type="button" className="list-group-item">Porta ac consectetur ac</button>
        <button type="button" className="list-group-item">Vestibulum at eros</button>
      </div>

      <div className="col-sm-6 list-group trip-logs">
      <button className="btn btn-default btn-sm pull-right saved-trips-edit-button"><i className="fa fa-plus" aria-hidden="true"></i></button>
        <h2>Trip Logs</h2>
        <button type="button" className="list-group-item">Cras justo odio</button>
        <button type="button" className="list-group-item">Dapibus ac facilisis in</button>
        <button type="button" className="list-group-item">Morbi leo risus</button>
        <button type="button" className="list-group-item">Porta ac consectetur ac</button>
        <button type="button" className="list-group-item">Vestibulum at eros</button>
      </div>



      </div>
      </div>
    )
  }
}

export default TripLogs
