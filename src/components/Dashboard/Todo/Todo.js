import React, { Component } from 'react';




class ToDo extends Component{
  render(){
    return(
      <div className='col-md-4 todo-wrapper'>
        <ul className="list-group col-md-12 todo">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="input-group todo-input-wrapper">
          <input type="text" className="form-control todo-input" placeholder="Add an item" />
          <span className="input-group-btn">
            <button className="btn btn-default todo-input" type="button">Add</button>
          </span>
        </div>
      </div>
    )
  }
}

export default ToDo;
