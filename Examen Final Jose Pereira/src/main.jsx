import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Context from './Components/utils/global.context';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Context>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
    </Context>
  </BrowserRouter>
);


