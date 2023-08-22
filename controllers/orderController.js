import Order from '../models/order.js';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv'
dotenv.config()
sgMail.setApiKey(process.env.API_KEY)

export const createOrder = async (req, res, next) => {
    try {
        const order = await req.body.data
        const email = order.user.email
        const newOrder = new Order(order)
        await newOrder.save()
        await sgMail.send({
            from: process.env.MAIL_USER,
            to: email,
            subject: 'Organick',
            text: 'Thank you for your order! We will contact you asap!',
            html: '<h1>Thank you for your order! We will contact you asap!</html>'
        });
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