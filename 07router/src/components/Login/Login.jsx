import React, { useState } from 'react'
const cors=require('cors')
function Login() {

const [user,setuser]=useState({
  name:"",
  email:"",
  Password:""
})

const handleinput=(e)=>{
  console.log(e);
  let name=e.target.name;
  let value=e.target.value

  setuser({...user,[name]:value})
}

const handlesubmit=async(e)=>{
  e.preventDefault()
  console.log(user);
  try{
  const response=await fetch('http://localhost:3000/api/v1/users/registerdemo',{
    method:"POST",
    headers:{
      'Content-Type':"application/json"
    },
    body:JSON.stringify(user)
  })


  console.log(response);
}catch(error){
  console.log(error);
}
}



  return (
    // <div className='h-full p-80 w-500 text-white text-3xl  bg-green-500'>Login Form</div>
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
    <h1 className='color-green font-bold  bg-orange-500 background'>Login page</h1>
    <p className='font-bold size-24'>shree radhe</p>
    <div className='bg-white p-3 rounded w-25'>
<h2>Register</h2>
<form>
  <div className='mb-3'>
    <label htmlFor="name">
      <strong>Name</strong>
    </label>
<input 
type="text" 
placeholder='Enter Name'
autoComplete='off'
name="name"
className='form-control rounded-0'
onChange={handleinput}
/>
 </div>



 <div className='mb-3'>
  <label htmlFor="email">
    <strong>Email</strong>
  </label>
  <input 
type="email" 
placeholder='Enter Email'
autoComplete='off'
name="email"
className='form-control rounded-0'
onChange={handleinput}
/>
 </div>


 <div className='mb-3'>
  <label htmlFor="email">
    <strong>Password</strong>
  </label>
  <input 
type="Password" 
placeholder='Enter Password'
autoComplete='off'
name="Password"
className='form-control rounded-0'
onChange={handleinput}
/>
 </div>
<button onClick={handlesubmit} type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
<p>Already have an account</p>
<button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</button>
</form>
    </div>
   </div>
    
  )
}

export default Login
