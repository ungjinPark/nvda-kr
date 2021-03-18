import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as HostRouter} from 'react-router-dom';
import './res/styles/app.initialize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
  <HostRouter>
    <App />
  </HostRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
