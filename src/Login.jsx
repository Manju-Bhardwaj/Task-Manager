import React ,{useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

// import Sidebar from './components/sidebar';
const Login=()=> {
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/user');
      const users = response.data;

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // User authenticated successfully
        localStorage.setItem('authenticatedUser', JSON.stringify(user));
        alert('Login successful');
        // Redirect to a protected route or dashboard
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
    <form action='' onSubmit={handleLogin}>
        <div className='mb-3 '> 
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' value={email} placeholder='Enter Email' name='email' onChange={(e)=>setEmail(e.target.value)} required className='form-control rounded-0'></input>
            
        </div>
        <div className='mb-3'> 
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' value={password} placeholder='Enter Password' name='password' onChange={(e)=> setPassword(e.target.value)} required  className='form-control rounded-0'></input>
            
        </div>
        <Link to="/dashboard" type='submit' className='btn btn-dark w-100'>Login</Link>
        <p className='mt-2'>Don't have any account?</p>
        <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Create Account</Link>
    </form>
    {error && <p>{error}</p>}
    </div>
  
</div>
  );
};

export default Login
