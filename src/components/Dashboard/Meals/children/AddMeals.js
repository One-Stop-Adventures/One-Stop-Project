import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addMeal} from '../../../../ducks/meals'

class AddMeals extends Component{
  constructor(){
    super()
    this.state = {
        day: '',
        breakfast: '',
        lunch: '',
        dinner: '',
        snack: '',
        params: null
    }
    this.updateDay = this.updateNewItem.bind(this, 'day');
    this.updateBreakfast = this.updateNewItem.bind(this, 'breakfast');
    this.updateLunch = this.updateNewItem.bind(this, 'lunch');
    this.updateDinner = this.updateNewItem.bind(this, 'dinner');
    this.updateSnack = this.updateNewItem.bind(this, 'snack');
    this.addMeal = this.addMeal.bind(this)
  }
  updateNewItem(value, e){
    this.setState({[value]: e.target.value})
  }
  addMeal(event){
    event.preventDefault()
    this.props.addMeal(this.state, this.props.dashboardParams)
    this.props.changeView()
  }
  render(){
    return(
      <div>
      <form onSubmit={this.addMeal} className='input-group' className="list-group col-xs-12 todo">
        <h4>Day: </h4><input onChange={this.updateDay} value={this.state.day} className='form-control' type='number' placeholder='Day of trip i.e "1"'/>
        <h4>Breakfast: </h4><input onChange={this.updateBreakfast} value={this.state.breakfast} className='form-control' type='text' placeholder='Breakfast'/>
        <h4>Lunch: </h4><input onChange={this.updateLunch} value={this.state.lunch} className='form-control' type='text' placeholder='Lunch'/>
        <h4>Dinner: </h4><input onChange={this.updateDinner} value={this.state.dinner} className='form-control' type='text' placeholder='Dinner'/>
        <h4>Snack: </h4><input onChange={this.updateSnack} value={this.state.snack} className='form-control' type='text' placeholder='Snack'/>
        <input type="submit" className="btn btn-default todo-input col-xs-12" value="Add Meal"/>
      </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({addMeal}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMeals)
