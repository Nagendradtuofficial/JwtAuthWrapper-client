import React from 'react'
import ReactDOM from 'react-dom/client'
import JWTAuthWrapper from './jwtauthwrapper.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JWTAuthWrapper />
    </BrowserRouter>
  </React.StrictMode>,
)
