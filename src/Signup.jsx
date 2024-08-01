import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import Validation from './SignupValidation'

function Signup() {
    const [values, setValues]= useState({
        name:'',
        email:'',
        password:''
    })
    const [errors , setErrors]= useState({})
    const handleInput=(event)=>{
        setValues(prev =>({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));

    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-Up</h2>
    <form action='' onSubmit={handleSubmit}>
    <div className='mb-3 '> 
            <label htmlFor='Name'><strong>Name</strong></label>
            <input type='text' placeholder='Enter Name' name='name' onChange={handleInput} className='form-control rounded-0'></input>
            {errors.name && <span className='text-danger'>{errors.name}</span> }
        </div>
        <div className='mb-3 '> 
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' placeholder='Enter Email'  name='email' onChange={handleInput} className='form-control rounded-0'></input>
            {errors.email && <span className='text-danger'>{errors.email}</span> }
        </div>
        <div className='mb-3'> 
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0'></input>
            {errors.password && <span className='text-danger'>{errors.password}</span> }
        </div>
        {/* <div className='mb-3'> 
            <label htmlFor='password'><strong>Confirm Password</strong></label>
            <input type='password' placeholder='Confirm Password' className='form-control rounded-0'></input>
        </div> */}
        <Link to='/sidebar' type='submit' className='btn btn-dark w-100'>Sign up</Link>
        <p className='mt-2'>Already have an account?</p>
        <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Login</Link>
    </form>
    </div>
  
</div>
  )
}

export default Signup
