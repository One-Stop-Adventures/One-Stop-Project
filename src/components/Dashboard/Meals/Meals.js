import React, { Component } from 'react'
import ViewMeals from './children/ViewMeals'
import AddMeals from './children/AddMeals'


class Meals extends Component{
  constructor(){
    super()
    this.state = {
      viewMeals: true
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView(){
    this.setState({viewMeals: !this.state.viewMeals})
  }
  render(){
    return(
      <div className='col-xs-6 dashboardLower'>
        <h3>Meal Plan</h3>
        {
          this.state.viewMeals
          ?
          <div>
          <ViewMeals dashboardParams={this.props.dashboardParams} />
          <button onClick={this.changeView} className="btn btn-default todo-input col-xs-12" type="button">Add A Meal</button>
          </div>
          :
          <div>
          <AddMeals dashboardParams={this.props.dashboardParams} changeView={this.changeView} />
          </div>
        }
      </div>
    )
  }
}

export default Meals;
