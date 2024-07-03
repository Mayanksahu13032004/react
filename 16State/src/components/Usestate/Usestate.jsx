import React, { useState } from 'react'

 function Usestate() {
 
const [inputvalue,setinputvalue]=useState("Ajay");
 
 const onchange=(e)=>{
  const newval=e.target.value;
  setinputvalue(newval)
 }

    return (
    <div>
      <h1>{inputvalue}</h1>
      <input type='text'
      value={inputvalue}
      onChange={onchange}
      placeholder='Type Something..'>
        
      </input>

    </div>
  )
}

export default Usestate
