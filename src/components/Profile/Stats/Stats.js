import React, {Component} from 'react'
import '../Profile.css'
import '../Bio/Bio.css'

class Stats extends Component {

render(){
  return (
  <div>
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

export default Stats
