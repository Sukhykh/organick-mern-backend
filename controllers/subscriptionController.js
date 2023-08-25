import Subscription from '../models/subscription.js';
import { transporter } from '../utilities/mailsender.js';

export const createSubscription = async (req, res, next) => {
    try {
        const curentUser = await req.body.user
        const user = await Subscription.findOne({ user: curentUser })
        if (user) return res.status(403).json({ message: 'You are already subscribed!' })
        const newSubscription = new Subscription({ user: curentUser})
        await newSubscription.save();
        await transporter.sendMail({
            from: 'kostiantyn-sukhykh@hotmail.com',
            to: curentUser,
            subject: 'Organick',
            text: 'Thank you for your subscription!',
        })
        return res.status(200).json({ message: 'Subscription was cdreated successfly!' })
    } catch (error) {
        return next(error)
    }
}

export const getAllSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.find()
        console.log(subscription)
        if (!subscription) return next(new Error('Subscription not found'))
        return res.json(subscription)
    } catch (error) {
        return next(error)
    }
}