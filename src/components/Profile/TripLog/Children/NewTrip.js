import React, { Component } from 'react';

class NewTrip extends Component {
  constructor(){
    super()
    this.cancelTrip = this.cancelTrip.bind(this)
  }
  cancelTrip(){
    this.props.changeView()
  }
  render(){
    return (
      <div>


      <div className="col-sm-6 form-group">

        <h2>New Trip</h2>
        <input className="form-control trip-log-title" placeholder="Title" />
        <textarea className="form-control bio-box" rows="6" placeholder="Where are we going?"></textarea>
        <div className="form-group">
          <button type="submit" className="btn btn-default btn-xs trip-submit">Post</button>
          <button onClick={this.cancelTrip} className="btn btn-danger btn-xs">Cancel</button>
        </div>
      </div>


      </div>

    )
  }
}

export default NewTrip;
