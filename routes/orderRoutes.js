import express from 'express'

import { 
    createOrder,
    getAllOrders,
} from '../controllers/orderController.js'

export const orderRoutes = express.Router()

orderRoutes.post('/orders', createOrder)
orderRoutes.get('/orders', getAllOrders)