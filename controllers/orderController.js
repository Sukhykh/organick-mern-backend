import mongoose from 'mongoose';
import Order from '../models/order.js';

export const createOrder = async (req, res, next) => {
    try {
        const order = await JSON.parse(req.body.data)
        const newOrder = new Order(order)
        await newOrder.save()
        return res.status(200).json({ message: 'Order was cdreated successfly!' })
    } catch (error) {
        console.error('Error while saving order:', error);
        return next(error)
    }
}

export const getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find().populate('products.productId')
        if (!orders) return next(new Error('Orders not found'))
        return res.json(orders)
    } catch (error) {
        return next(error)
    }
}