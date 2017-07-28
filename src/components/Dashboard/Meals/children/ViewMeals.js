import React, {Component} from 'react'
import {connect} from 'react-redux'

class ViewMeals extends Component{
  render(){
    const mealsList = this.props.meals.map(meal=>{
      return(
          <div>
          <h4>Day {meal.day}</h4>
          <ul className='list-group'>
            <li className='list-group-item'>Breakfast: {meal.breakfast}</li>
            <li className='list-group-item'>Lunch: {meal.lunch}</li>
            <li className='list-group-item'>Dinner: {meal.dinner}</li>
            <li className='list-group-item'>Snack: {meal.snack}</li>
          </ul>
          </div>
      )
    })
    return(
      <div>
      <ul className="list-group col-xs-12 todo">
      <li className="list-group-item">
        {mealsList}
      </li>
      </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    meals: state.meals.meals
  }
}

export default connect(mapStateToProps)(ViewMeals)
