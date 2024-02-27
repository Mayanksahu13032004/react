import React from 'react'
import Usercontext from './Usercontext'


// children matlab jo bhi value aayegi yus ko as it is pass kar dega 
const Usercontextprovider=({children})=>{
    const [user,setuser]=React.useState(null)
return(
    <Usercontext.Provider value={{user,setuser}}>
    {children}
    </Usercontext.Provider>
)
}



export default Usercontextprovider
