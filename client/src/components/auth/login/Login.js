import React from 'react'
import './Login.css'
import { useNavigate, Link } from 'react-router-dom'


function Login() {
  const navigate=useNavigate()

  return (
    <form className='login'>
        <h3>Sign In</h3>
        <p>Or use email for registeration</p>
        <div>
            <input placeholder='email' type="text" />
        </div>
        <div>
            <input placeholder='password' type="password" />
        </div>
        <div className='submit'>
            <button className='active' type='submit'>sign in</button>
            <button className='link' onClick={()=>navigate('/auth/signup')} >Sign In</button>

        </div>
        <Link className='to_home' to='/'>PRIDE HOME</Link>





    </form>
  )
}

export default Login