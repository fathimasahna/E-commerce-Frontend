import React from 'react'
import Navbar from './Navbar'
const Login= () => {
  return (
<div>
  <Navbar/>
    <div className="login-container">
     
      <form>
        <h2>Login</h2>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button type='submit'>LOGIN</button>
      </form>
    </div>
 </div>   


  )
}

export default Login
