import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(
  '\n\
  __    __   __   __      ___  \n\
  |  |  |  | |  | |  |        \n\
  |  |__|  | |  | |  |    (_)  |\n\
  |   __   | |  | |  |      |  |\n\
  |  |  |  | |  | |__|     _|  |\n\
  |__|  |__| |__| (__)    (_)  |\n\
                           /__/\n\
'
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
