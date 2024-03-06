import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Getstarted from './components/Getstarted/Getstarted.jsx'
import Login from './components/Login/Login.jsx'
import { Provider } from 'react-redux'
import {store} from './app/store'

import Todos from './components/Todo/Todos.jsx'





const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:"",
      element:<Home/>
    },
    {
      path:"about",
element:<About/>
    },
    {
      path:"/getstarted",
      element:<Getstarted/>
    },
    {
      path:"/login",
      element:<Login/>

    },
    {
      path:"/todo",
      element:<Todos/>
    },

  ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>

  </React.StrictMode>,
)
