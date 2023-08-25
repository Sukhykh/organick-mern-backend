import Order from '../models/order.js';
import { transporter } from '../utilities/mailsender.js';

export const createOrder = async (req, res, next) => {
    try {
        const order = await req.body.data
        const email = order.user.email
        const newOrder = new Order(order)
        await newOrder.save()
        await transporter.sendMail({
            from: 'kostiantyn-sukhykh@hotmail.com',
            to: email,
            subject: 'Organick',
            text: 'Thank you for your order!',
        })
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