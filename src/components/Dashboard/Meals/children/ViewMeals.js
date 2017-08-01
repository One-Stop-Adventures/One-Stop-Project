import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchMeal} from '../../../../ducks/meals'
import {deleteMeal} from '../../../../ducks/meals'

class ViewMeals extends Component{
  componentWillMount(){
    this.props.fetchMeal(this.props.dashboardParams)
  }
  deleteMeal(meal, index){
    this.props.deleteMeal(meal, index)
  }
  render(){
    const mealsList = this.props.meals.map((meal, index)=>{
      return(
          <div key={meal.day}>
          <h4>Day {meal.day}<i onClick={()=>{this.deleteMeal(meal.id, index)}} className="fa fa-trash fa-lg trashButton pull-right" aria-hidden="true"></i><i className="fa fa-pencil pull-right" aria-hidden="true"></i></h4>
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
      <li className="list-group-item meals-list-group">
        {mealsList}
      </li>
      </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    meals: state.meals.meals
  }
}

const mapDispatchToProps = {
  fetchMeal,
  deleteMeal
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewMeals)
