import React from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate=useNavigate()
  return (
    <form className='signup'>
        <h3>Create account</h3>
        <p>Or use email for registeration</p>
        <div>
            <input placeholder='username' type="text" />
        </div>
        <div>
            <input placeholder='email' type="text" />
        </div>
        <div>
            <input placeholder='phone' type="text" />
        </div>
        <div>
            <input placeholder='password' type="password" />
        </div>
        <div className='submit'>
            <button className='active' type='submit'>Sign Up</button>
            <button className='link' onClick={()=>navigate('/auth/login')} >Sign In</button>

        </div>
        <Link className='to_home' to='/'>PRIDE HOME</Link>




    </form>
  )
}

export default SignUp