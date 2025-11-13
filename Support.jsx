import React from 'react'
export default function Support(){
  return (
    <main className="mx-auto max-w-4xl px-4 py-6">
      <h2 className="text-xl font-bold">Support & Services</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded-xl shadow-sm">
        <div>
          <div className="font-semibold">Customer Care</div>
          <div className="text-sm">24/7 help via chat and call. Helpline: <strong>+91 98765 43210</strong></div>
        </div>
        <div>
          <div className="font-semibold">Business Services</div>
          <div className="text-sm">Bulk orders and corporate supplies — biz@essentialshub.example</div>
        </div>
      </div>
    </main>
  )
}
