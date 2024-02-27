import React,{useState,useContext} from 'react'
import Usercontext from '../context/Usercontext'

function Login() {

    const [username,setusername]=useState(' ')
    const [password,setpassword]=useState(' ')

    const {setuser}=useContext(Usercontext)

const  handlesubmit=(e)=>{
e.preventDefault()
setuser({username,password})
}

  return (
    <>
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e)=>setusername(e.target)}
      placeholder='username'/>
      <input 
      type="text"
       value={password}
       onChange={(e)=>setpassword(e.target)}
       placeholder='password'  />
      <button onClick={handlesubmit}>Submit</button>

    </div>
    
    
    
</>
  )
}

export default Login
