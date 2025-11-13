import React, { useEffect, useState } from 'react'
import ImageUploader from '../components/ImageUploader'
import { fetchProducts, createProduct, updateProduct } from '../lib/api'

export default function Admin(){
  const [products, setProducts] = useState([])
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({title:'', category:'Groceries', price:0, description:'', stock:0, express:false, image:''})

  useEffect(()=>{ fetchProducts().then(r=> setProducts(r.data)).catch(()=> setProducts([])) }, [])

  function onUploadBase64(base64){ setForm(f=> ({...f, image: base64})) }
  function save(){
    if(editing){ updateProduct(editing.id, form).then(()=> alert('Updated (demo)')) }
    else { createProduct(form).then(()=> alert('Created (demo)')) }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <h2 className="text-xl font-bold">Admin — Manage Products</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <label className="block text-sm">Title</label>
          <input value={form.title} onChange={e=> setForm({...form, title: e.target.value})} className="w-full p-2 border rounded mt-1" />
          <label className="block text-sm mt-2">Category</label>
          <input value={form.category} onChange={e=> setForm({...form, category: e.target.value})} className="w-full p-2 border rounded mt-1" />
          <label className="block text-sm mt-2">Price</label>
          <input type="number" value={form.price} onChange={e=> setForm({...form, price: Number(e.target.value)})} className="w-full p-2 border rounded mt-1" />
          <label className="block text-sm mt-2">Description</label>
          <textarea value={form.description} onChange={e=> setForm({...form, description: e.target.value})} className="w-full p-2 border rounded mt-1" />
          <label className="block text-sm mt-2">Stock</label>
          <input type="number" value={form.stock} onChange={e=> setForm({...form, stock: Number(e.target.value)})} className="w-full p-2 border rounded mt-1" />

          <div className="mt-2">
            <ImageUploader onUpload={onUploadBase64} />
          </div>

          <div className="mt-4 flex gap-2">
            <button onClick={save} className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
            <button onClick={()=> setForm({title:'', category:'Groceries', price:0, description:'', stock:0, express:false, image:''})} className="px-4 py-2 border rounded">Reset</button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold">Existing Products (demo)</h3>
          <ul className="mt-2 space-y-2">
            {products.map(p=> (
              <li key={p.id} className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-xs text-gray-500">₹{p.price} • {p.category}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={()=> { setEditing(p); setForm(p) }} className="px-2 py-1 border rounded">Edit</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
