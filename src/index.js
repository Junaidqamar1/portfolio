import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Suppress ResizeObserver loop limit errors
// const resizeObserverErr = window.ResizeObserver.prototype.observe;
ReactDOM.render(<App />, document.getElementById('root'));



