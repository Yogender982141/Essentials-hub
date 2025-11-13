import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Support from './pages/Support'
import Admin from './pages/Admin'
import Checkout from './pages/Checkout'

export default function App(){
  const [cartCount, setCartCount] = useState(0)
  const [cartOpen, setCartOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div>
      <Header cartCount={cartCount} onOpenCart={()=> setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer />
    </div>
  )
}
