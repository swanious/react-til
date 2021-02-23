import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const element = <h1>Hello, {formatName(name)}!</h1>

// const formatName = function(name) {
//   return name.firstName + " " + name.lastName
// }

// const name = {
//   firstName : 'Suwan',
//   lastName: 'Oh'
// }

function tick() {
  const element = (
    <div>
      <h1>Hello, World!</h1>
      {/* <h2>Is is {new Date().toLocaleString()}</h2> */}
      {/* <h2>Is is {new Date().toLocaleDateString()}</h2> */}
      <h2>Is is {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(
    element,
    document.getElementById('root')
    );
}
setInterval(() => {
  tick()
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
