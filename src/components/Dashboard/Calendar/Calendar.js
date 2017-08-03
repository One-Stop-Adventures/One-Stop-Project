import React, { Component } from 'react';




class Calendar extends Component{
  render(){
    return(
      <div className='col-md-6 col-md-offset-3 text-center calendar-container'>
      <div className="row calendar-container">
        <h1>Calendar</h1>

        <div className='col-md-6 col-md-offset-3 calendar'>

        </div>
      </div>
      </div>
    )
  }
}

export default Calendar;
