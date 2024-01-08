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

//Providers
import ProductProvider from './context/products/ProductProvider.jsx'
import UserProvider from './context/user/UserProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
