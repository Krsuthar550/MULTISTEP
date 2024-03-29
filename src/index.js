import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    < Main > 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Main>
)

reportWebVitals()
