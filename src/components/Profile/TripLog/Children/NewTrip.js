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
        <label className="col-sm-4">Title</label>
        <input className="form-control" placeholder="Title" />
        <label className="col-sm-4">Description</label>
        <textarea className="form-control bio-box" rows="6" placeholder="Where are we going?"></textarea>
        <div className="form-group">
          <button type="submit" className="btn btn-default trip-submit">Post</button>
          <button onClick={this.cancelTrip} className="btn btn-danger">Cancel</button>
        </div>
      </div>


      </div>

    )
  }
}

export default NewTrip;
