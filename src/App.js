import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Shop from './components/Shop/Shop'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
import { connect } from 'react-redux'
import { fetchUser } from './ducks/profile_reducer'


import Register from './components/Register/Register'
import Dashboard from './components/Dashboard/Dashboard'

class App extends Component {
  
  constructor () {
    super() 
    this.showProfile = this.showProfile.bind(this)

  }
  
  showProfile({match}){
    console.log(this.props.userId)
    if( this.props.userId ){
      return <Profile match = {match}/>
    } else {
      return <Redirect to="/register"/>
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/shop' component={Shop} />
          <Route path='/profile/:id' render = {this.showProfile} />

          <Route path='/register' component={Register} />
          <Route path='/dashboard/:id' component={Dashboard} />
        </Switch>
      
      </div>
    );
  }
}
function mapStateToProps (state) {
  return {
    userId: state.profile.user.id
  }
}
export default connect(mapStateToProps)(App);
