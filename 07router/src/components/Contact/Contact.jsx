import React ,{useState} from 'react'

export default function Contact() {

    const [message, setMessage] = useState('');
    const [user, setUser] = useState({
        OPDNo:"",
        fullname:"",
        fathername:"",
        age:"",
        gender:"",
        disease:"",
        mobilenumber:"",
       });
    
      const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setUser({ ...user, [name]: value });
}



const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch('http://localhost:3000/api/v1/patient/patientdetail', {
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
    <div className='text-center bg-blue-500  h-screen'>
       <h1 className='text-4xl mb-5  font-bold'>Complete Detail of Patient</h1>
<div className='bg-blue-300    mx-auto w-1/2   '>
      <form onSubmit={handleSubmit} >
     

      <div className='mb-6 text-3xl p-5'>
          <label htmlFor="email">
            <strong>OPDNo.</strong>
          </label>
          <input
            type="number"
            placeholder='OPDNo.'
            autoComplete='off'
            name="OPDNo"
            className='form-control rounded-0'
            onChange={handleInput}
          />
        </div>





        <div className='mb-6 text-3xl p-5'>
          <label htmlFor="email">
            <strong>Full Name</strong>
          </label>
          <input
            type="name"
            placeholder='Enter Full Name'
            autoComplete='off'
            name="fullname"
            className='form-control rounded-0'
            onChange={handleInput}
          />
        </div>



        <div className='mb-6 text-3xl'>
          <label htmlFor="password">
            <strong>Father Name</strong>
          </label>
          <input
            type="name"
            placeholder='Father Name'
            autoComplete='off'
            name="fathername"
            className='form-control rounded-0'
            onChange={handleInput}
          />
        </div>



        <div className='mb-6 text-3xl p-5'>
          <label htmlFor="email">
            <strong>age</strong>
          </label>
          <input
            type="number"
            placeholder='Age'
            autoComplete='off'
            name="age"
            className='form-control rounded-0'
            onChange={handleInput}
          />
        </div>



        <div className='mb-6 text-3xl p-5'>
          <label htmlFor="email">
            <strong>Gender</strong>
          </label>
          <input
            type="name"
            placeholder='Gender'
            autoComplete='off'
            name="gender"
            className='form-control rounded-0'
            onChange={handleInput}
          />
        </div>

        <div className='mb-6 text-3xl p-5'>
          <label htmlFor="email">
            <strong>Mobile Number</strong>
          </label>
          <input
            type="number"
            placeholder='Mobile Number'
            autoComplete='off'
            name="mobilenumber"
            className='form-control rounded-0'
            onChange={handleInput}
          />
        </div>


        <div className='mb-6 text-3xl p-5'>
          <label htmlFor="email">
            <strong>Diseasea</strong>
          </label>
          <input
            type="name"
            placeholder='Disease'
            autoComplete='off'
            name="disease"
            className='form-control rounded-0'
            onChange={handleInput}
          />
        </div>






        <button type='submit' onSubmit={handleSubmit} className='btn mb-6 text-3xl bg-orange-50 btn-success  rounded-xl hover:text-white hover:bg-gray-500'>Submit</button>
       
      </form>
      {<p className='text-4xl '> {message}</p>}   
      </div>
      </div>
  );
}
