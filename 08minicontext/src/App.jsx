
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Usercontextprovider from './context/Usercontextprovider'

function App() {
  

  return (
    <Usercontextprovider>
    <h1>Chai or code</h1>
    <Login/>
    <Profile/>
         </Usercontextprovider>
  )
}

export default App
