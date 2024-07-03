import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import AddNotes from './components/AddNotes'

function App() {
  

  return (
    <>
      <h1>Learn About Todo</h1>
      <AddTodo/> 
      <Todos/> 
      <AddNotes/>

    </>
  )
}

export default App
