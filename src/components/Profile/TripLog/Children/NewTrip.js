import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {addTrip} from '../../../../ducks/trip.js'
import NPSapi from './NPSapi'


class NewTrip extends Component {
  constructor(){
    super()
    this.state = {
      trip_name: '',
      description: '',
      city: '',
      state: ''
    }
    this.updateName = this.onInputChange.bind(this, 'trip_name')
    this.updateDescription = this.onInputChange.bind(this, 'description')
    this.updateCity = this.onInputChange.bind(this, 'city')
    this.updateState = this.onInputChange.bind(this, 'state')
    this.createTrip = this.createTrip.bind(this)
    this.cancelTrip = this.cancelTrip.bind(this)
  }


  cancelTrip(){
    this.props.changeView()
  }
  onInputChange(value, e){
    this.setState({[value]: e.target.value})
  }
  createTrip(event){
    event.preventDefault()
    addTrip(this.state, this.props.profileParams)
    .then(response=>{
      let trip_id = response.data[0].id
      this.props.history.push(`/dashboard/${trip_id}`)
    })
  }
  render(){
    return (
      <div>


      <form onSubmit={this.createTrip} className="col-sm-6 form-group">

        <h2>New Trip</h2>

        <input onChange={this.updateName} className="form-control trip-log-title" placeholder="Title" />
        <input onChange={this.updateCity}className="form-control trip-log-title" placeholder="Nearest Town" />
        <input onChange={this.updateState} className="form-control trip-log-title" placeholder="State" />
        <textarea onChange={this.updateDescription} className="form-control bio-box" rows="6" placeholder="Where are we going?"></textarea>
        <h3> OR </h3>
        <NPSapi />


        <div className="form-group">
          <button type="submit" className="btn btn-default btn-xs trip-submit">Post</button>
          <button onClick={this.cancelTrip} className="btn btn-danger btn-xs">Cancel</button>
        </div>
      </form>


      </div>

    )
  }
}


export default withRouter(NewTrip);
