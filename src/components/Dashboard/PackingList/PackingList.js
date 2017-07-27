import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addPackingItem} from '../../../ducks/packinglist'

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
  addNewItem(){
    console.log(this.state.item)
    this.props.addPackingItem(this.state.item)
    console.log('New Item Added')
    this.setState({item: ''})
  }
  render(){
    const packingItems = this.props.packingItems.map(item=>{
      return(
        <li className='list-group-item'>{item}</li>
      )
    })
    return(
      <div className='col-xs-6 dashboardLower'>
      <h3>Packing List</h3>
      <ul className="list-group col-xs-12 todo">
        {packingItems}
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
    packingItems: state.packinglist.packingItems
  }
}
const mapDispatchToProps = {
  addPackingItem
}

export default connect(mapStateToProps, mapDispatchToProps)(PackingList)
