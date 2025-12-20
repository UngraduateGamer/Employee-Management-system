import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoginForm from '../components/loginForm'
import SignUpForm from '../components/SignupForm'

const Signup = () => {
  return (
    <div>
        <Navbar/>
        <SignUpForm/>
        <Footer/>
    </div>
  )
}

export default Signup