import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Typeahead} from 'react-bootstrap-typeahead'
import {withRouter} from 'react-router-dom'

import { fetchParks } from '../../../../ducks/nps_reducer'
import {addTrip} from '../../../../ducks/trip.js'

class NPSapi extends Component{
    constructor(){
      super()
      this.state={
        selected: ''
      }
      this.onInputChange = this.onInputChange.bind(this)
    }
    componentDidMount(){
        this.props.fetchParks( 'yellow' )
    }
    selectPark(name){
      console.log(name)
    }
    onInputChange(e){
      // console.log(e[0].addresses[0].city)
      // console.log(e[0].states)
      // console.log(e[0].fullName)
      // console.log(e[0].description)
      console.log(e)
      console.log(this.props.profileParams)
      let np = {
        trip_name: e[0].fullName,
        description: e[0].description,
        city: e[0].addresses[0].city,
        state: e[0].states
      }
      console.log(np)
        addTrip(np, this.props.profileParams)
        .then(response=>{
          let trip_id = response.data[0].id
          this.props.history.push(`/dashboard/${trip_id}`)
        })
    }
    render() {
        console.log( this.props )
        return(
            <div>
                <Typeahead align={'justify'} bodyContainer={true} className='typeahead' labelKey={option => `${option.fullName}`} onChange={this._handleChange, this.onInputChange} options={this.props.parks} />
            </div>
        )
    }
}

function mapStateToProps( state ){
    return{
        parks: state.parks.park_info
    }
}

const mapDispatchToProps = {
    fetchParks
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NPSapi))
