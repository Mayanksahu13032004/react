import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usestate from './components/Usestate/Usestate'
import Usecallback from './components/Usecallback/Usecallback'
import Useeffect from './components/Useeffect/Useeffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     {/* <Usecallback/>
     <Usestate/> */}
     <Useeffect/>
    </>
  )
}

export default App
