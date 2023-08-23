import Subscription from '../models/subscription.js';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv'
dotenv.config()
sgMail.setApiKey(process.env.API_KEY)

export const createSubscription = async (req, res, next) => {
    // console.log(req.body.user)
    try {
        const curentUser = await req.body.user
        const user = await Subscription.findOne({ user: curentUser })
        if (user) return res.status(403).json({ message: 'You are already subscribed!' })
        const newSubscription = new Subscription({ user: curentUser})
        await newSubscription.save()
        // await sgMail.send({
        //     from: process.env.MAIL_USER,
        //     to: curentUser,
        //     subject: 'Organick',
        //     text: 'Thank you for your subscription!',
        //     html: 'Thank you for your subscription!'
        // });
        return res.status(200).json({ message: 'Subscription was cdreated successfly!' })
    } catch (error) {
        return next(error)
    }
}


