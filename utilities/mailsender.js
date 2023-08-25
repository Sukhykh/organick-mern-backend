import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.USER,
        pass: process.env.RASS,
    }
})