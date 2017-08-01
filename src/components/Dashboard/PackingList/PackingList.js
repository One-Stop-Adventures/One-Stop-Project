import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addPackingItem} from '../../../ducks/packinglist'
import {deletePackingItem} from '../../../ducks/packinglist'
import {addPackingListItem} from '../../../actions/packingListService'
import {fetchPackingItem} from '../../../ducks/packinglist'
import {getPackingListItems} from '../../../actions/packingListService'
import {deletePackingListItem} from '../../../actions/packingListService'

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
    let packingListObj={
      item: this.state.item,
      id: this.props.dashboardParams
    }
    addPackingListItem(packingListObj)
    this.props.addPackingItem(packingListObj)
    this.setState({item: ''})
  }
  deleteItem(index, item){
    this.props.deletePackingItem(index)
    deletePackingListItem(item.item.id)
  }
  componentWillMount(){
    const promise = getPackingListItems(this.props.dashboardParams)
    this.props.fetchPackingItem(promise)
  }

  render(){
    console.log(this.props.packingItems)
    const packingItems = this.props.packingItems.map((item, index)=>{
      return(
        <div key={index}>
          <li className='list-group-item'>{item.item}<i onClick={()=>{this.deleteItem({index}, {item})}}  className="fa fa-trash fa-lg trashButton pull-right" aria-hidden="true"></i></li>
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
  deletePackingItem,
  fetchPackingItem
}

export default connect(mapStateToProps, mapDispatchToProps)(PackingList)
