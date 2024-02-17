import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [Counter,setCounter]=useState(1)
// set Counter counter pe work karega 
// jo apan useState me value denge vo counter ki valu inittalisw ho jayegi
const addValue=()=>{
  if(Counter < 20 && Counter>0){
    
    setCounter((prevcounter)=> prevcounter+1)
    setCounter(prevcounter=> prevcounter+1)
    setCounter(prevcounter=> prevcounter+1)

    console.log("Increse Stop",Counter);
  }
  
  else{
    console.log("Over Limit : ",Counter);
  }
   

}

const removevalue=()=>{
  if(Counter>0) {
    Counter=Counter-1
  setCounter(Counter)
    
    console.log("Decrese stop",Counter);
  }
  
}


  return (
    <>
     <h1>Chai aur  react</h1>
     <h2>Counter value : {Counter}</h2>
     <button
     onClick={addValue}
     >Add value{Counter}</button>
     <br />
     <br />
     <button
     onClick={removevalue}
     >Decrease Value{Counter}</button>
     <p>Footer : {Counter}</p>
    </>
  )
}

export default App
