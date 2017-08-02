import React, { Component } from 'react';
import '../Trips.css';

class SavedTrips extends Component {
render(){
  return (
    <div>
    <div className="col-sm-6 list-group saved-trips">

      <h2>Saved Trips</h2>
      <button type="button" className="list-group-item">Cras justo odio</button>
      <button type="button" className="list-group-item">Dapibus ac facilisis in</button>
      <button type="button" className="list-group-item">Morbi leo risus</button>
      <button type="button" className="list-group-item">Porta ac consectetur ac</button>
      <button type="button" className="list-group-item">Vestibulum at eros</button>
    </div>
    </div>
  )
}

}

export default SavedTrips;
