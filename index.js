import express from 'express'
import mongoose from "mongoose";
import multer from 'multer'
import cors from 'cors'
import dotenv from 'dotenv'

import { fileStorage, fileFilter } from './multerConfig.js';
import { productRoutes } from './routes/productRoutes.js';
import { orderRoutes } from './routes/orderRoutes.js';
import { subscriptionRoutes } from './routes/subscriptionRoutes.js';

const server = express()
dotenv.config()

const PORT = process.env.PORT || 4444
const MONGODB = process.env.MONGODB

server.use(cors())
server.use(express.json())
server.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'))
server.use('/images', express.static('images'))

server.get('/', (req, res, next) => res.send('Hello from server!'))

server.use(productRoutes)
server.use(orderRoutes)
server.use(subscriptionRoutes)

server.use((error, req, res, next) => res.status(500).json({ message: 'Some database error occurred!' }))

mongoose
    .connect(MONGODB)
    .then(() => console.log(`Connection to MongoDB: successful`))
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`)
        });
    })
    .catch(err => console.log(err))