import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
// import store from './store';
import App from './App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Route component={App} />
    </BrowserRouter>
  </Provider>
  
  , document.getElementById('root'));
registerServiceWorker();
