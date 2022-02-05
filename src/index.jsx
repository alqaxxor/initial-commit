import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider as ThemeProvider } from './Context/Theme'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
  );
  
  
  