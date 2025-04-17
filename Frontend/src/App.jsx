import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import CaptainLogin from './pages/captainLogin'
import CaptainSignup from './pages/captainSignup'

function App() {
  return (
 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/userLogin" element={<Userlogin/>} />
  <Route path="/userSignup" element={< Usersignup/>} />
  <Route path="/captainLogin" element={<CaptainLogin/>} />
  <Route path="/captainSignup" element={<CaptainSignup/>} />
 </Routes>
  )
}

export default App