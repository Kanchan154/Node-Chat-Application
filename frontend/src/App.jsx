import { useState } from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Home from './Pages/Home/Home'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './Context/AuthContext'

function App() {
  
  const {authUser} = useAuthContext()

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
      <Route path='/' element= {authUser ? <Home/> : <Navigate to={"/login"}/>}/>
      <Route path='/login' element= {authUser ? <Navigate to={'/'}/> : <Login/>}/>
      <Route path='/signup' element= {authUser ? <Navigate to={'/'}/> : <Signup/>}/>
      
      </Routes>

      <Toaster/>
    </div>
  )
}

export default App
