import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
// import store from './store';
import App from './App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
console.log(process.env)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>



  , document.getElementById('root'));
registerServiceWorker();
