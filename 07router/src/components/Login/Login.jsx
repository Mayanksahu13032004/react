import React, { useState } from 'react';

function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState('');

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
    console.log("name",name);
    console.log("email",email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch('http://localhost:3000/api/v1/users/registerdemo', {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(user)
      });

      const responseData = await response.json();
      if (response.status === 201) {
        setMessage(responseData.message);
        console.log("patient registered successfully");
      } else {
        setMessage(responseData.message || 'User not registered');
      }
    } catch (error) {
      throw error
    }
  }

  return (
    
    <div className='text-center bg-blue-500 h-screen'>
      <h1 className='text-4xl mb-5  text-gray-50'>Register your Account</h1>
      <div className='bg-blue-300    mx-auto w-1/2  h-1/2'>
      <form onSubmit={handleSubmit}>
        <div className='mb-6 p-4 text-3xl'>
          <label htmlFor="name">
            <strong>Name:</strong>
          </label>
          <input
            type="text"
            placeholder='Enter Name'
            autoComplete='off'
            name="name"
            className='form-control rounded-0'
            onChange={handleInput}
          />
        </div>

        <div className='mb-6 text-3xl'>
          <label htmlFor="email">
            <strong>Email:</strong>
          </label>
          <input
            type="email"
            placeholder='Enter Email'
            autoComplete='off'
            name="email"
            className='form-control rounded-0'
            onChange={handleInput}
          />
        </div>

        <div className='mb-6 text-3xl'>
          <label htmlFor="password">
            <strong>Password:</strong>
          </label>
          <input
            type="password"
            placeholder='Enter Password'
            autoComplete='off'
            name="password"
            className='form-control rounded-0'
            onChange={handleInput}
          />
        </div>

        <button type='submit' className='btn mb-6 text-3xl bg-orange-50 btn-success  rounded-xl hover:text-white hover:bg-gray-500'>Register</button>
      <p className='mb-6 text-3xl'>IF YOU HAVE AN ACCOUNT SO PLEASE LOGIN</p>
         <a className='btn mb-6 text-3xl bg-orange-50 btn-success  rounded-xl hover:text-white hover:bg-gray-500' href="/Getstarted">Login</a>
       
      </form>
      {<p className='text-4xl '>{message}</p>}
      </div>
    </div>
  );
}

export default Login;