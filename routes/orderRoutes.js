import express from 'express'
import { validationErrors } from '../utilities/validationErrors.js'
import { ordersCreateValidation } from '../validationsConfig.js'

import { 
    createOrder,
    getAllOrders,
} from '../controllers/orderController.js'

export const orderRoutes = express.Router()

orderRoutes.post('/orders', ordersCreateValidation, validationErrors, createOrder)
orderRoutes.get('/orders', getAllOrders)