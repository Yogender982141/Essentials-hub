import React from 'react'
export default function CartDrawer({cart, onClose, onUpdateQty, onRemove, onCheckout}){
  const subtotal = cart.reduce((s,i)=> s + i.price * i.qty, 0)
  return (
    <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl z-50">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Your Cart</h3>
          <button onClick={onClose} className="text-sm px-2 py-1 border rounded">Close</button>
        </div>
        <div className="mt-4 flex-1 overflow-auto">
          {cart.length === 0 && <div className="text-gray-500 text-sm">Your cart is empty.</div>}
          <ul className="space-y-4">
            {cart.map((it)=> (
              <li key={it.id} className="flex items-center gap-3">
                <img src={it.image} className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-1">
                  <div className="font-semibold">{it.title}</div>
                  <div className="text-xs text-gray-500">₹{it.price}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <input type="number" value={it.qty} min={1} onChange={(e)=> onUpdateQty(it.id, Math.max(1, Number(e.target.value)))} className="w-16 px-2 py-1 border rounded-md text-sm" />
                    <button onClick={()=> onRemove(it.id)} className="text-sm text-red-600">Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-gray-700">
            <div>Subtotal</div>
            <div>₹{subtotal}</div>
          </div>
          <div className="mt-3 flex gap-2">
            <button onClick={onCheckout} className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md">Checkout</button>
            <button onClick={()=> alert('Cart cleared (demo)')} className="px-4 py-2 border rounded-md">Clear</button>
          </div>
        </div>
      </div>
    </div>
  )
}
