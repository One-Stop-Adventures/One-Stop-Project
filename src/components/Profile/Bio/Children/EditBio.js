import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addFirst, addLast, addLocation, addDob, addBio} from '../../../../ducks/profile_reducer'

class Editbio extends Component {
  constructor(){
    super()
    this.state = {
        firstName: '',
        lastName: '',
        location: '',
        dob: '',
        bio: ''
    }
    this.updateFirst = this.updateItem.bind(this,'firstName');
    this.updateLast = this.updateItem.bind(this,'lastName');
    this.updateLocation = this.updateItem.bind(this,'location');
    this.updateDob = this.updateItem.bind(this,'dob');
    this.updateBio = this.updateItem.bind(this,'bio');
    this.submitUpdates = this.submitUpdates.bind(this)
  }
  submitUpdates(){
      switch( this.state ){
        case this.state.firstName:
            this.props.addFirst(this.state.firstName)
        case this.state.lastName:
            this.props.addLast(this.state.lastName)
        case this.state.location:
            this.props.addLocation(this.state.location)
        case this.state.dob:
            this.props.addDob(this.state.dob)
        case this.state.bio:
            this.props.addBio(this.state.bio)
        default:
            this.props.changeView()

      }
  }
  updateItem( value, e ) {
    this.setState({[value]: e.target.value})
    console.log(this.state)
  }

  render(){
    return(
<div>
      <div id="hidden">
            <div className="col-xs-6 col-md-4 demo-box well">
              <div className="form-group">
                <label className="col-sm-4 control-label">First Name </label>
                <div className="col-sm-7">
                  <input
                  onChange={this.updateFirst}
                  value={this.state.firstName} className="form-control" placeholder="First Name" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">Last Name </label>
                <div className="col-sm-7">
                  <input
                  onChange={this.updateLast}
                  value={this.state.lastName} className="form-control" placeholder="Last Name" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">Location </label>
                <div className="col-sm-7">
                  <input
                  onChange={this.updateLocation}
                  value={this.state.location} className="form-control" placeholder="Location" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-4 control-label">DOB </label>
                <div className="col-sm-7">
                  <input
                  onChange={this.updateDob}
                  value={this.state.dob} className="form-control" placeholder="Date Of Birth" />
                </div>
              </div>
            </div>

            <div className="col-xs-6 col-md-4 well demo-box">
              <label className="col-sm-4 control-label">Biography:</label>
              <textarea className="form-control bio-box" rows="6" placeholder="Tell us about yourself!" value={this.state.bio} onChange={this.updateBio}></textarea>
              <button onClick={this.submitUpdates} className="btn btn-default btn-sm pull-right submit-profile-button">Submit</button>
            </div>
      </div>
</div>
    )
  }
}
function mapStateToProps(state){
    return{
        firstName: state.profile.firstName,
        lastName: state.profile.lastName,
        location: state.profile.location,
        dob: state.profile.dob,
        bio: state.profile.bio
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addFirst, addLast, addLocation, addDob, addBio}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Editbio)
