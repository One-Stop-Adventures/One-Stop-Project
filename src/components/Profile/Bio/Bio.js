import React, {Component} from 'react'
import '../Profile.css'
import './Bio.css'

class Bio extends Component {
  render(){
    return (
      <div>

      <div className="container-fluid profile-box">
        <div className="row">
          <form className="form-horizontal form-box-show">
            <div className="row profile-info">

        <div className="col-xs-6 col-md-4 prof-box">
        <a className="profile-pic">
          <div className="profile-pic">
          <span className="glyphicon glyphicon-camera cam-icon"></span>
          <span>Change Image</span>
          </div>
        </a>
        </div>

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
        <button className="btn btn-default btn-sm pull-right submit-profile-button">Submit</button>
      </div>
</div>


            <div className="col-xs-6 col-md-4 profile-view">
              <p>First Name: firstname</p>
              <p>Last Name: lastname</p>
              <p>Location Name: location</p>
              <p>DOB: DOB</p>
            </div>

            <div className="col-xs-6 col-md-4 bio-show">
            <button className="btn btn-default btn-sm pull-right edit-profile-button"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>

            <label className="control-label">Biography:</label>
              <p className="biography-box">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

        </div>
      </form>

      </div>
      </div>

      <div className="container">
      <div className='row saved-trip-logs'>


      <div className="col-sm-6 list-group saved-trips">

        <h2>Saved Trips</h2>
        <button type="button" className="list-group-item">Cras justo odio</button>
        <button type="button" className="list-group-item">Dapibus ac facilisis in</button>
        <button type="button" className="list-group-item">Morbi leo risus</button>
        <button type="button" className="list-group-item">Porta ac consectetur ac</button>
        <button type="button" className="list-group-item">Vestibulum at eros</button>
      </div>

      <div className="col-sm-6 list-group trip-logs">
      <button className="btn btn-default btn-sm pull-right saved-trips-edit-button"><i className="fa fa-plus" aria-hidden="true"></i></button>
        <h2>Trip Logs</h2>
        <button type="button" className="list-group-item">Cras justo odio</button>
        <button type="button" className="list-group-item">Dapibus ac facilisis in</button>
        <button type="button" className="list-group-item">Morbi leo risus</button>
        <button type="button" className="list-group-item">Porta ac consectetur ac</button>
        <button type="button" className="list-group-item">Vestibulum at eros</button>
      </div>



      </div>
      </div>


        <div className="container stat-container">
        <div className="row">
        <h1 className="stat-title">Stats</h1>
        <ul className="list-group stat-box">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        </div>
        </div>






      </div>
    )
  }

}

export default Bio
