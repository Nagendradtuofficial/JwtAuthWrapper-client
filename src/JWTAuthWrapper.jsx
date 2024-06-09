import { useState } from 'react'
import { Route , Routes , Navigate } from 'react-router-dom';
import Signup from './components/Signup/index';
import Login from './components/Login/index';
import './JWTAuthWrapper.css'

export const logout_user = () => {
  localStorage.removeItem('token');
  window.location.reload();
}

function JWTAuthWrapper(props) {

  const appType = props.appType; 

  const user = localStorage.getItem('token');

  return (
    
      <Routes>
        {user && <Route path='/*' element = {props.children} />}
        <Route path='/signup' exact element = {<Signup appType = {appType}/>} />
        <Route path='/login' exact element = {<Login appType = {appType}/>} />
        <Route path='/' exact element = {<Navigate replace to='/login'/>} />
      </Routes>
  )
}

export default JWTAuthWrapper
