import React, { Component } from 'react'
import { connect } from 'react-redux'

import {fetchLog} from '../../ducks/log_reducer'

class TripLog extends Component{

  componentDidMount(){
    this.props.fetchLog(this.props.match.params.id)
  }
  render(){
    const logData = this.props.log.map(info=>{
      return(
        <div>
        <h1>Trip Log for your trip:</h1>
        <h2>{info.name}</h2>
        <h5>{info.city}, {info.state}</h5>
        <h5>{info.description}</h5>
        <h5> Total Distance: {info.total_distance} miles </h5>
        </div>
      )
    })
    console.log(this.props)
    return(
      <div>
      {logData}
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    log: state.tripLog.log
  }
}

const mapDispatchToProps = {
  fetchLog
}
export default connect(mapStateToProps, mapDispatchToProps)(TripLog)
