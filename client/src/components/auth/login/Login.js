import React from 'react'
import './Login.css'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'


function Login() {
  const navigate=useNavigate()
  const [form, setForm]=useState({
    email:'',
    password:'',
});

const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };
  


  return (
    <form onSubmit={onSubmitForm} className='login'>
        <h3>Sign In</h3>
        <p>Or use email for registeration</p>
        <div>
            <input name='email' value={form.email} onChange={onUpdateField} placeholder='email' type="text" />
        </div>
        <div>
            <input name='password' value={form.password} onChange={onUpdateField} placeholder='password' type="password" />
        </div>
        <div className='submit'>
            <button className='active' type='submit'>Sign In</button>
            <button className='link' onClick={()=>navigate('/auth/signup')} >Sign Up</button>

        </div>
        <Link className='to_home' to='/'>PRIDE HOME</Link>





    </form>
  )
}

export default Login