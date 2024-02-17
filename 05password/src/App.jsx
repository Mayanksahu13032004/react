import { useState,useCallback,useEffect,useRef } from 'react'



function App() {

  const [length,setlength]=useState(8)
  const [numberallowed,setnumberallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)
  const [password,setpassword]=useState("")


// useRef

const passwordref=useRef(null)
// usecallback me apan ko jo bhi kar rahe hai or us par 2 a 3 depend hai tho use call back jese number ,character deend hai
  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str += "0123456789"
    if(charallowed) str += "!@#$%^&*-_+=[]{}~`"
for (let i = 1; i <= length; i++) {
 let char=Math.floor(Math.random()*str.length+1)
 pass+=str.charAt(char)
  
}
setpassword(pass)


  }, [length,numberallowed,charallowed,setpassword])

// useRef -kisi bhi chese ka refrencre lena hai tho use ref lethe hai jese when we click on the click button the we select the passsword 

  const copypasswordtoclipboard=useCallback(()=>{
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0,5) range select
    window.navigator.clipboard.writeText(password)
  },[password])
// useeffect 
  useEffect(()=>{
    passwordgenerator()
  },[length,numberallowed,charallowed,passwordgenerator])

  


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 
     my-8 text-orange-500 bg-gray-700 '>
<h1 className='text-white text-center my-3 '>Password Generator</h1>

 <div className='flex shadow rounded-lg overflow-hidden mb-4'>

  <input 
  type="text"
  value={password}
  className='outline-none w-full py-1 px-3'
  placeholder='password'
  readOnly
  ref={passwordref}
  />
  <button
  onClick={copypasswordtoclipboard}
  className='outline-none bg-blue-700 text-ehite px-3 py-0.5 shrink-0'>Copy</button>
</div> 

<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
<input 
type="range"
min={6}
max={100}
value={length}
className='cursor-pointer'
onChange={(e)=>{setlength(e.target.value)}}
/>
<label>Length: {length}</label>
</div>
<div className='flex items-center gap-x-1'>
  <input
   type="checkbox"
   defaultChecked={numberallowed}
   id='numberinput'
   onChange={()=>{
    setnumberallowed((prev)=>!prev);
   }}
   />
   <label htmlFor="numberinput">Number</label>
</div>
<div className='flex items-center gap-x-1'>
<input 
type="checkbox" 
defaultChecked={charallowed}
id='characterinput'
onChange={()=>{
  setcharallowed((prev)=>!prev);
}}
/>
<label htmlFor="characterinput">Character</label>
</div>
</div>
</div>
    </>
  )
}

export default App
