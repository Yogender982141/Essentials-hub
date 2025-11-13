import axios from 'axios'

const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:4000' })

export const fetchProducts = () => API.get('/products')
export const createProduct = (p) => API.post('/products', p)
export const updateProduct = (id, p) => API.put(`/products/${id}`, p)
export const createOrder = (order) => API.post('/orders', order)
export const createPaymentIntent = (order) => API.post('/payments/create-intent', order)

export default API
