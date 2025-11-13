import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'

const app = express()
app.use(cors())
app.use(express.json({ limit: '10mb' }))

const DATA_FILE = path.resolve('./server/data.json')
function readData(){ try { return JSON.parse(fs.readFileSync(DATA_FILE)) } catch(e){ return { products: [], orders: [] } } }
function writeData(d){ fs.writeFileSync(DATA_FILE, JSON.stringify(d, null, 2)) }

// GET /products
app.get('/products', (req,res)=>{
  const d = readData(); res.json(d.products)
})

// POST /products (admin create)
app.post('/products', (req,res)=>{
  const d = readData(); const id = 'p'+Date.now(); const p = {...req.body, id}
  d.products.push(p); writeData(d); res.json(p)
})

// PUT /products/:id
app.put('/products/:id', (req,res)=>{
  const d = readData(); const id = req.params.id; d.products = d.products.map(p => p.id===id ? {...p, ...req.body} : p); writeData(d); res.json({ok:true})
})

// POST /orders
app.post('/orders', (req,res)=>{
  const d = readData(); const order = {...req.body, id: 'o'+Date.now(), createdAt: new Date().toISOString()}; d.orders.push(order); writeData(d); res.json(order)
})

// POST /payments/create-intent (mock)
app.post('/payments/create-intent', (req,res)=>{
  res.json({ status: 'payment_intent_created', clientSecret: 'demo_secret_'+Date.now() })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log('Mock server listening on', PORT))
