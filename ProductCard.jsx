import React from 'react'

function getImage(title){
  const q = encodeURIComponent(title.split(' ').slice(0,3).join(' '))
  return `https://source.unsplash.com/800x600/?${q}`
}

export default function ProductCard({p, onAdd, quickAdd}){
  return (
    <article className="bg-white rounded-xl shadow-sm p-3 flex flex-col">
      <div className="relative pb-40 rounded-md overflow-hidden bg-gray-100">
        <img src={getImage(p.title)} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="mt-2 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-sm">{p.title}</h4>
          {p.express && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Express</span>}
        </div>
        <div className="text-xs text-gray-500 mt-1 flex-1">{p.description}</div>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <div className="text-green-600 font-bold">₹{p.price}</div>
            <div className="text-xs text-gray-500">{p.rating} ★</div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button onClick={()=> quickAdd(p)} className="px-3 py-1 rounded-md bg-green-600 text-white text-sm">Quick Add</button>
            <button onClick={()=> onAdd(p)} className={`px-3 py-1 rounded-md text-sm ${p.stock>0 ? 'bg-white border' : 'bg-gray-200 text-gray-500'}`} disabled={p.stock<=0}>Add</button>
          </div>
        </div>
        <div className="mt-1 text-xs text-gray-400">Est. delivery: {p.express ? '15-30 mins' : '45-90 mins'}</div>
      </div>
    </article>
  )
}
