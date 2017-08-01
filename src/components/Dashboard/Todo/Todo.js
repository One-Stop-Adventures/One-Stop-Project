import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addItem} from '../../../ducks/todo'
import {fetchTodo} from '../../../ducks/todo'
import {deleteItem} from '../../../ducks/todo'
import {addTodo} from '../../../actions/todoService/todoService'
import {getTodos} from '../../../actions/todoService/todoService'
import {deleteTodos} from '../../../actions/todoService/todoService'


class ToDo extends Component{
  constructor(){
    super()
    this.state = {
      item: '',
      id: null
    }
    this.updateNewItem = this.updateNewItem.bind(this)
    this.addNewItem = this.addNewItem.bind(this)
  }
  updateNewItem(e){
    this.setState({item: e.target.value})
  }
  addNewItem(event){
    event.preventDefault();
    let todoObj = {
      item: this.state.item,
      id: this.props.dashboardParams
    }
    addTodo(todoObj)
    this.props.addItem(todoObj)
    this.setState({item: ''})
  }
  deleteItem(item, index){
    deleteTodos(item.item.id)
    this.props.deleteItem(index)
  }
  componentWillMount(){
    const promise = getTodos(this.props.dashboardParams)
    this.props.fetchTodo(promise)
    promise.catch(err => {
      console.log(err.data)
    })
  }
  render(){
    const toDoItems = this.props.items.map((item, index)=>{
      return(

        <li key={item.id} className='list-group-item'>{item.item}<i onClick={()=>{this.deleteItem({item}, {index})}} className="fa fa-check fa-lg pull-right trashButton" aria-hidden="true"></i></li>

      )
    })
    return(
      <div className='col-xs-4 text-center'>
        <h3>To Do</h3>
        <ul className="list-group col-md-12 todo">
          {toDoItems}
        </ul>
        <form onSubmit={this.addNewItem} className="input-group todo-input-wrapper">
          <input value={this.state.item} onChange={this.updateNewItem} type="text" className="form-control todo-input" placeholder="Add an item" />
          <span className="input-group-btn">
            <button onClick={this.addNewItem} className="btn btn-success todo-input" type="button">Add</button>
          </span>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    items: state.todo.items,
    error: state.todo.error
  }
}
const mapDispatchToProps = {
  addItem,
  deleteItem,
  fetchTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
