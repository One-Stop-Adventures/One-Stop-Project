import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addPackingItem} from '../../../ducks/packinglist'
import {deletePackingItem} from '../../../ducks/packinglist'

class PackingList extends Component{
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
  addNewItem(event){
    event.preventDefault()
    console.log(this.state.item)
    this.props.addPackingItem(this.state.item)
    console.log('New Item Added')
    this.setState({item: ''})
  }
  deleteItem(item){
    console.log('hello')
    this.props.deletePackingItem(item)
  }
  render(){
    const packingItems = this.props.packingItems.map((item, index)=>{
      return(
        <div>
          <li className='list-group-item'>{item}<i onClick={()=>{this.deleteItem({index})}}  className="fa fa-trash fa-lg trashButton pull-right" aria-hidden="true"></i></li>
        </div>
      )
    })
    return(
      <div className='col-xs-4 text-center'>
      <h3>Packing List</h3>
      <ul className="list-group col-xs-12 todo">
        {packingItems}
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
    packingItems: state.packinglist.packingItems
  }
}
const mapDispatchToProps = {
  addPackingItem,
  deletePackingItem
}

export default connect(mapStateToProps, mapDispatchToProps)(PackingList)
