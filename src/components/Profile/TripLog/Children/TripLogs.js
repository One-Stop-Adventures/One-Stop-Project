import React, { Component } from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

import {fetchLog} from '../../../../ducks/profile_reducer'


import '../Trips.css'

class TripLogsChild extends Component {
constructor(){
  super()
  this.editTrip = this.editTrip.bind(this)
}
editTrip(){
  this.props.changeView()
}
componentWillMount(){
  this.props.fetchLog(this.props.profileParams)
}
goToLog(id){
  this.props.history.push(`/user/${this.props.profileParams}/log/${id}`)
}
render(){
  console.log(this.props.logs)
  const logs = this.props.logs.map(log=>{
    return <button onClick={()=>{this.goToLog(log.id)}} type='button' className='list-group-item' key={log.id}>{log.name}</button>
  })

  return (
    <div>
    <div className="col-sm-6 list-group trip-logs">
    <button onClick={this.editTrip} className="btn btn-default btn-sm pull-right saved-trips-edit-button"><i className="fa fa-plus" aria-hidden="true"></i></button>
      <h2 className="saved-trips-title">Trip Logs</h2>
    <div className="trip-scroll">
      {logs}
    </div>
    </div>
    </div>
  )
}
}

function mapStateToProps(state){
  return{
    logs: state.profile.logs
  }
}

const mapDispatchToProps = {
  fetchLog
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TripLogsChild))
