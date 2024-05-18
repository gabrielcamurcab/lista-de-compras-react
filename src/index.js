import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const local = document.getElementById('root');
const root = ReactDOM.createRoot(local);

root.render(
  <App />
)

reportWebVitals();
