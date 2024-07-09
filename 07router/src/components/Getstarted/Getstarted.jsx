import React ,{useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Getstarted() {

  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  }

    const handleSubmit=async(e)=>{
     
     e.preventDefault();
     const apiUrl = 'http://localhost:3000/api/v1/users/logindemo';

     try {
       const response = await fetch(apiUrl, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(user),
       });
   console.log("if staerted");
       if (response.status==200) {
        setMessage(response.message || 'user Login successfully  ');
        navigate('/')
        console.log("successfulr login");
         throw new Error('Login successfuly');
       }
       else{
        console.log("not register yet");
        setMessage(response.message || 'User not registered');
       }


   
    } catch (error) {
      console.error('Error during login:', error);
    }
}
return (
    <div className='text-center bg-blue-500  h-screen'>
       <h1 className='text-4xl mb-5  text-gray-50'>Login your Account</h1>
<div className='bg-blue-300    mx-auto w-1/2  h-1/2 '>
      <form onSubmit={handleSubmit} >
     
        <div className='mb-6 text-3xl p-5'>
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

        <button type='submit' onSubmit={handleSubmit} className='btn mb-6 text-3xl bg-orange-50 btn-success  rounded-xl hover:text-white hover:bg-gray-500'>Login</button>
       
      </form>
      {<p className='text-4xl '> {message}</p>}   
      </div>
      </div>
  );
}

export default Getstarted
