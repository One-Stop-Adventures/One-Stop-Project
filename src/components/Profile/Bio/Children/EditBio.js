import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {updateBio} from '../../../../ducks/profile_reducer'

class Editbio extends Component {
  constructor(){
    super()
    this.state = {
        bio: ''
    }
    this.updateItem = this.updateItem.bind(this)
    this.submitUpdates = this.submitUpdates.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
  }
  updateItem(e) {
    this.setState({bio: e.target.value})
    console.log(this.state)
  }
  submitUpdates(){
    this.props.updateBio(this.props.profileParams, this.state)
    this.props.changeView()
  }
  cancelEdit(){
    this.props.changeView()
  }
  render(){
    return(
        <div className="edit-profile-container">
            <div className="col-md-6 col-md-offset-3">
              <div className="form-group">
                <textarea className="form-group bio-box" rows="3" placeholder="Biography" value={this.state.bio} onChange={this.updateItem}></textarea>
                <div className="form-group submit-profile-button">
                  <button onClick={this.submitUpdates} className="btn btn-default btn-xs submit-profile-button">Submit</button>
                  <button onClick={this.cancelEdit} className="btn btn-default btn-xs submit-profile-button">Cancel</button>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

function mapStateToProps(state){
  return state
}
const mapDispatchToProps = {
  updateBio
}

export default connect(mapStateToProps, mapDispatchToProps)(Editbio)
