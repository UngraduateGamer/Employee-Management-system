import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LoginForm from '../components/loginForm';

const Login = () => {
  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <div id="login-form">
            
            <LoginForm/>
        </div>
        <Footer/>
    </div>
  )
}

export default Login