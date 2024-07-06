import React, { useState } from 'react'

function Login() {

  

  
const [user,setuser]=useState({
  name:"",
  email:"",
  Password:""
})

const [message,setmessage]=useState('')


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
  console.log("the error",Error);
  console.log("the response",response);
  
setmessage(response.formData.message)

  // if(response.status==201){
    
  //   console.log("Uaer registre successfully");
  // }else{
  //   console.log("User not registre")
  // }


}catch(error){
  console.log("Error is",error);


  
  if(error.response && error.response.status===409){
    setmessage(error.response.data.message)
  }else{
    setmessage('An error occurred. Please try again.');
  }
}
}


  return (

    
<div className='text-center  bg-slate-400 h-screen'> 

<form>





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
onChange={handleinput}
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
onChange={handleinput}
/>
 </div>






 <div className='mb-6 text-3xl'>
  <label htmlFor="email">
    <strong>Password:</strong>
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



<button onClick={handlesubmit}  type='submit' className='btn mb-6 text-3xl btn-success w-100 rounded-0'>Register</button>





<p className='mb-6 text-3xl '>Already have an account</p>
<button className='btn btn-default border w-100 bg-light rounded-0 mb-6 text-3xl text-decoration-none'>Login</button>
</form>
    {message && <p>{message}</p>}
    </div>    
  )
}

export default Login
