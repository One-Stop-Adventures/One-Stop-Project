import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import Landing from './components/Landing/Landing'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default App;
