import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import NavigationRouter from './navigation/NavigationRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { AccionesContext } from './context/AccionesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // Añadir el Componente Context
  <AccionesContext>
    <Router>
      <NavigationRouter />
    </Router>
  </AccionesContext>
  ,

  // <React.StrictMode>
  /* { <App /> } */
  // </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
