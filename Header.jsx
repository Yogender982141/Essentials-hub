import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ cartCount, onOpenCart }){
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div>
          <Link to="/" className="text-2xl font-bold text-green-600">Essentials Hub</Link>
          <div className="text-xs text-gray-500">Fast essentials — delivered in minutes</div>
        </div>

        <nav className="flex items-center gap-3">
          <Link to="/shop" className="text-sm">Shop</Link>
          <Link to="/support" className="text-sm">Support</Link>
          <Link to="/admin" className="text-sm">Admin</Link>

          <button onClick={onOpenCart} className="bg-green-600 text-white px-3 py-2 rounded">Cart ({cartCount})</button>
        </nav>
      </div>
    </header>
  )
}
