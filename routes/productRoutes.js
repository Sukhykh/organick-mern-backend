import express from 'express'

import { 
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js'

export const productRoutes = express.Router()

productRoutes.post('/products', createProduct)
productRoutes.get('/products', getAllProducts)
productRoutes.get('/products/:productId', getOneProduct)
productRoutes.patch('/products/:productId', updateProduct)
productRoutes.delete('/products/:productId', deleteProduct)
