import React, { Component } from 'react'


class Meals extends Component{
  render(){
    return(
      <div className='col-xs-6 dashboardLower'>
        <h3>Meal Plan</h3>
        <ul className="list-group col-xs-12 todo">
        <li className="list-group-item">
          <h4>Day 1</h4>
          <ul className='list-group'>
            <li className='list-group-item'>Breakfast:</li>
            <li className='list-group-item'>Lunch:</li>
            <li className='list-group-item'>Dinner:</li>
            <li className='list-group-item'>Snack:</li>
          </ul>
        </li>
        </ul>
            <button className="btn btn-default todo-input col-xs-12" type="button">Add a Meal</button>
      </div>
    )
  }
}

export default Meals;
