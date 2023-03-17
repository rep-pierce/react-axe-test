import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  const axeCore = require('axe-core');
  axe(React, ReactDOM, 1000, axeCore);
}

ReactDOM.render(<App />, document.getElementById('root'));
