import React from 'react'
import './Register.css'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Register=()=> {
  return (
    <div>
        <section>
    <div className='wrapper'>
      <form>
        <h2>Register</h2>

        <div className='input-field'>
            <input type="text" required/>
            <label>Username</label>
        </div>


        <div className='input-field'>
            <input type="text" required/>
            <label>Email</label>
        </div>

        <div className='input-field'>
            <input type="password" required/>
            <label>Password</label>
        </div>

        <div className='input-field'>
            <input type="password" required/>
            <label>Confirm Password</label>
        </div>

        

        
        <button type='submit'>Login</button>
        <span className='btn' type='submit'><FcGoogle size={25}className='google' />Login with Google</span>


        <div className='register'> 
            <p>Already have an account? <Link  to={'/login'}>Login </Link></p>

        </div>

      </form>
    </div>
    </section>
  
      
    </div>
  )
}

export default Register
