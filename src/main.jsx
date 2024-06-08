import React from 'react'
import ReactDOM from 'react-dom/client'
import JWTAuthWrapper from './JWTAuthWrapper.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <JWTAuthWrapper />
  </React.StrictMode>,
)
