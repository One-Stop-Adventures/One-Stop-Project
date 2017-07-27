import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addItem} from '../../../ducks/todo'




class ToDo extends Component{
  constructor(){
    super()
    this.state = {
      item: ''
    }
    this.updateNewItem = this.updateNewItem.bind(this)
    this.addNewItem = this.addNewItem.bind(this)
  }
  updateNewItem(e){
    this.setState({item: e.target.value})
  }
  addNewItem(){
    this.props.addItem(this.state.item)
    console.log('New Item Added')
    this.setState({item: ''})
  }
  render(){
    const toDoItems = this.props.items.map(item=>{
      return(
        <li className='list-group-item'>{item}</li>
      )
    })
    return(
      <div className='col-md-4 todo-wrapper'>
        <h3>To Do: </h3>
        <ul className="list-group col-md-12 todo">
          {toDoItems}
        </ul>
        <div className="input-group todo-input-wrapper">
          <input value={this.state.item} onChange={this.updateNewItem} type="text" className="form-control todo-input" placeholder="Add an item" />
          <span className="input-group-btn">
            <button onClick={this.addNewItem} className="btn btn-default todo-input" type="button">Add</button>
          </span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    items: state.todo.items
  }
}
const mapDispatchToProps = {
  addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
