import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"mayank",
    age:21
  }
  let newarr=[1,2,3]

  return (
    <>
    <h1 className='bg-green-300 text-black p-4'>Tailwind test</h1>
    
     <Card username="chaiaurcode" btnText="click me" />
     <Card username="shree ram" btnText="visit me"/>

    </>
  )
}

export default App
