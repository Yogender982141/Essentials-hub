import React from 'react'
import { createPaymentIntent } from '../lib/api'

export default function Checkout({cart}){
  async function pay(){
    const resp = await createPaymentIntent({ cart })
    alert('Payment simulated: ' + (resp.data && resp.data.status))
  }
  return (
    <main className="mx-auto max-w-4xl px-4 py-6">
      <h2 className="text-xl font-bold">Checkout (Demo)</h2>
      <div className="mt-4">
        <button onClick={pay} className="px-4 py-2 bg-green-600 text-white rounded">Pay (Simulate)</button>
      </div>
    </main>
  )
}
