import React from 'react'
import Header from './components/Header.jsx/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function LAyout() {
  return (
    <>
      <Header/>
      
      <Outlet/>
      <Footer/>

    </>
  )
}

export default LAyout
