import React from 'react'
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const login=() =>{
  return (
    <section>
    <div className='wrapper'>
      <form>
        <h2>Login</h2>

        <div className='input-field'>
            <input type="text" required/>
            <label>Enter your email</label>
        </div>

        <div className='input-field'>
            <input type="password" required/>
            <label>Enter your password</label>
        </div>

        <div className='forget'>
            <label htmlFor="remember">
                <input type="checkbox" id='remember' />
                <p>Remember me</p>
            </label>
            <a href="#">Forget password?</a>
        </div>
        <button type='submit'>Login</button>
        <span className='btn' type='submit'><FcGoogle size={25}className='google' />Login with Google</span>


        <div className='register'> 
            <p>Don't have an account? <Link to={'/register'}>Register</Link></p>

        </div>

      </form>
    </div>
    </section>
  )
}

export default login
