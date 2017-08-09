import React, { Component } from 'react';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Shop from './components/Shop/Shop'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
import { connect } from 'react-redux'
import { fetchUser } from './ducks/profile_reducer'
import axios from 'axios'


import Register from './components/Register/Register'
import Dashboard from './components/Dashboard/Dashboard'

class App extends Component {
  componentDidMount() {
    console.log("Hello")
    axios.get('/user_auth')
    .then(response => {
      if (response.data && response.data.id) {
        this.props.fetchUser(response.data.id)
      }
    })
    
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/shop' component={Shop} />
          <PrivateRoute path='/profile/:id' component={Profile} userId={this.props.userId}/>
          <Route exact path='/register' component={Register} />
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
export default withRouter(connect( mapStateToProps, {fetchUser} )(App))

function PrivateRoute ({path, component, userId}) {
  return userId ? <Route path={path} component={component} /> : <Redirect to="/" />
}