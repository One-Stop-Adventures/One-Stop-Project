import React, { Component } from 'react';
import '../Trips.css';

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {fetchTrips} from '../../../../ducks/trip'


class SavedTrips extends Component {
  componentWillMount(){
    this.props.fetchTrips(this.props.profileParams)
  }
  goToTrip(id){
    this.props.history.push(`/dashboard/${id}`)
  }
render(){
  console.log(this.props.trips)
  const tripsList = this.props.trips.map(trip=>{
    return <button onClick={()=>{this.goToTrip(trip.id)}} key={trip.id} type="button" className="list-group-item">{trip.trip_name}</button>
  })
  return (
    <div>
    <div className="col-sm-6 list-group saved-trips">

      <h2>Saved Trips</h2>
      {tripsList}
    </div>
    </div>
  )
}

}

function mapStateToProps(state){
  return{
    trips: state.trip.trips
  }
}
const mapDispatchToProps = {
  fetchTrips
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SavedTrips))
