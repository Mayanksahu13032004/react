import React from 'react'
import Usestate from '../Usestate/Usestate'

function Usecallback() {
  
    const [counterone,setcounterone]=Usestate(0);

    const IncrementOne=()=>{
        setcounterone(counterone+1)
    }
  
  
    return (

  <div>
      <button
      onClick={IncrementOne}
      >Counter

      </button>
    </div>
  )
}

export default Usecallback
