
    import React, { useState } from 'react';
    // import axios from 'axios';
    import './app.css';
    
    function About (){
      const [user,setUser]=useState({
        OPDNo:"",
      });

      // const [message,setMessage]=useState('');
      const [data,setdata]=useState(null);
      
const handleInput=(e)=>{
  const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
    // console.log("OPDNo is",OPDNo);
}
console.log("shree radhe");


const handleSubmit=async(e)=>{
  e.preventDefault();
  console.log(user);



try{
  const response=await fetch('http://localhost:3000/api/v1/patient/searchPatientByOPD',{
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(user)
  });

console.log("complete try");

setdata(response.data);

// const responseData = await response.json();


// if (response.status === 201) {
//   setMessage(responseData.message);
//   console.log("patient registered successfully");
// } else {
//   setMessage(responseData.message || 'User not registered');
// }
} catch (error) {
throw error
}




}



     
      return (
        <div className="App">
          <h1>Find User by User Number</h1>


         
         
          <div className='mb-6 text-3xl'>
          <label htmlFor="OPDNo">
            <strong>OPDNo</strong>
          </label>
          <input
            type="number"
            placeholder='Enter OPDNo'
            autoComplete='off'
            name="OPDNo"
            className='form-control rounded-0'
            onChange={handleInput}
          />
        </div>




          <button onClick={handleSubmit}>Fetch User</button>
          {/* {<p className='text-4xl '>{message}</p>} */}
         


        








        </div>
      );
    };
    
    export default About;
    





    

  