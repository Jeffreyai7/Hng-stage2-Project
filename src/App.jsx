import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path='/checkout' element={<CheckOut/>} /> 
  </Routes>

  </>
  
)
}

export default App
