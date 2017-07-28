import React, {Component} from 'react'


class Editbio extends Component {
  constructor(){
    super()
    this.submitBio = this.submitBio.bind(this)
  }
  submitBio(){
    this.props.changeView()
  }
  render(){
    return(
<div>
      <div id="hidden">
            <div className="col-xs-6 col-md-4 demo-box">
              <div className="form-group">
                <label className="col-sm-4 control-label">First Name </label>
                <div className="col-sm-7">
                  <input className="form-control" placeholder="First Name" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">Last Name </label>
                <div className="col-sm-7">
                  <input className="form-control" placeholder="Last Name" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">Location </label>
                <div className="col-sm-7">
                  <input className="form-control" placeholder="Location" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">DOB </label>
                <div className="col-sm-7">
                  <input className="form-control" placeholder="Date Of Birth" />
                </div>
              </div>
            </div>

            <div className="col-xs-6 col-md-4">
              <label className="col-sm-4 control-label">Biography:</label>
              <textarea className="form-control bio-box" rows="6" placeholder="Tell us about yourself!"></textarea>
              <button onClick={this.submitBio} className="btn btn-default btn-sm pull-right submit-profile-button">Submit</button>
            </div>
      </div>
</div>
    )
  }
}

export default Editbio
