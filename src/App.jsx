import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import Aboutus from './pages/Aboutus'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/products" element={<ProductsList/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path='/checkout' element={<CheckOut/>} /> 
    <Route path='/cart' element={<Cart/>} /> 

  </Routes>

  </>
  
)
}

export default App
