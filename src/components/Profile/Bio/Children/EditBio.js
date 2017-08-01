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
        <div className="edit-profile-container">
            <div className="col-md-6 col-md-offset-3">
              <div className="form-group">
                  <input
                  onChange={this.updateFirst}
                  value={this.state.firstName} className="form-control demo-bio" placeholder="First Name" />
              </div>

              <div className="form-group">
                  <input
                  onChange={this.updateLast}
                  value={this.state.lastName} className="form-control demo-bio" placeholder="Last Name" />
              </div>

              <div className="form-group">
                  <input
                  onChange={this.updateLocation}
                  value={this.state.location} className="form-control demo-bio" placeholder="Location" />
              </div>

              <div className="form-group">
                  <input
                  onChange={this.updateDob}
                  value={this.state.dob} className="form-control demo-bio" placeholder="Date Of Birth" />
              </div>

              <textarea className="form-group bio-box" rows="3" placeholder="Biography" value={this.state.bio} onChange={this.updateBio}></textarea>
              <div className="form-group submit-profile-button">
              <button onClick={this.submitUpdates} className="btn btn-default btn-xs submit-profile-button">Submit</button>
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
