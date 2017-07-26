import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Shop from './components/Shop/Shop'
import Footer from './components/Footer/Footer'
import Register from './components/Register/Register'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/shop' component={Shop} />
          <Route path='/register' component={Register} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
