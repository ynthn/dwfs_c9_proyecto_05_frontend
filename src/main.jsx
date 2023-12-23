//default react
import React from 'react'
import ReactDOM from 'react-dom/client'

//components
import App from './App.jsx'

//styles
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Routes
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
