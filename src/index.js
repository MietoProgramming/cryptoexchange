import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import { reducers } from './reducers';

//const store = createStore(reducers);



ReactDOM.render(
  //<Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
