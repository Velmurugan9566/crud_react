import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import ChangeColor from './ChangeColor';
import reportWebVitals from './reportWebVitals';
//import Header from './Cssexample';
//import Addlist from './Addlist';
//import Timer from './Useeffectex';

import Myform from './htmlform.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const ro = ReactDOM.createRoot(document.getElementById('ro'));
root.render(
  <React.StrictMode>
    <Myform/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
