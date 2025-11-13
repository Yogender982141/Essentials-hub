import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import CartDrawer from '../components/CartDrawer'
import { fetchProducts } from '../lib/api'

export default function Shop(){
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  useEffect(()=>{ fetchProducts().then(r=> setProducts(r.data)).catch(()=> setProducts([])) }, [])

  function addToCart(p){
    if(p.stock<=0) return alert('Out of stock')
    setCart(c => { const found = c.find(x=>x.id===p.id); if(found) return c.map(x=> x.id===p.id ? {...x, qty: x.qty+1}:x); return [...c, {...p, qty:1, image: `https://source.unsplash.com/400x400/?${encodeURIComponent(p.title.split(' ').slice(0,3).join(' '))}`}]})
  }
  function quickAdd(p){ addToCart(p) }
  function updateQty(id, qty){ setCart(c=> c.map(x=> x.id===id ? {...x, qty}:x)) }
  function remove(id){ setCart(c=> c.filter(x=> x.id!==id)) }
  function checkout(){ setShowCart(false); alert('Demo checkout: create order via API') }

  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Shop</h2>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map(p=> <ProductCard key={p.id} p={p} onAdd={addToCart} quickAdd={quickAdd} />)}
      </section>

      {showCart && <CartDrawer cart={cart} onClose={()=> setShowCart(false)} onUpdateQty={updateQty} onRemove={remove} onCheckout={checkout} />}

    </main>
  )
}
