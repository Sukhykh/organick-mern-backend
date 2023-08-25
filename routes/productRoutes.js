import express from 'express'
import { validationErrors } from '../utilities/validationErrors.js'
import { productsCreateValidation } from '../validationsConfig.js'

import { 
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js'

export const productRoutes = express.Router()

productRoutes.post('/products', productsCreateValidation, validationErrors, createProduct)
productRoutes.get('/products', getAllProducts)
productRoutes.get('/products/:productId', getOneProduct)
productRoutes.post('/products/:productId', productsCreateValidation, validationErrors, updateProduct)
productRoutes.delete('/products/:productId', deleteProduct)