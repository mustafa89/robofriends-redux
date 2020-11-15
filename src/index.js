import React from 'react';
import ReactDOM from 'react-dom';  //--> for websites; react-native for mobile
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App.js'
import { removeProperties } from '@babel/types';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App/>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// --> Properties(PROPS) are simply things that come out of an applications state
// --> A parent feeds state in to a child component and as soon as the child 
// --> receives the state it's a property. The child can never change the PROP
// --> props are static dictated by state.