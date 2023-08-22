import { body } from "express-validator";

export const ordersCreateValidation = [
    body('data.user.fullName', 'Your name must be at least 3 char').isLength({min: 3}).isString().trim(),
    body('data.user.email', 'Enter correct email').isEmail(),
    body('data.user.address', 'Input your adress').isLength({min: 3}).isString().trim(),
    body('data.user.phoneNumber', 'Input correct phone number').isLength({min: 3}).isString().trim(),
    body('data.user.message', 'Enter some message').optional().isString(),
];

export const productsCreateValidation = [
    body('title', 'Yout Title must be at least 3 chars').isLength({min: 3}).isString().trim(),
    body('tag', 'Yout Tag must be at least 3 chars').isLength({min: 3}).isString().trim(),
    body('rating', 'Enter correct rating').isFloat(),
    body('price', 'Enter correct price').isFloat(),
    body('discount', 'Enter correct discount').isFloat(),
    body('description', 'Yout Description must be at least 10 chars').isLength({min: 10}).isString().trim(),
    body('productDescription', 'Yout Product Description must be at least 10 chars').isLength({min: 10}).isString().trim(),
    body('additionalInfo', 'Yout tag Additional Info be at least 10 chars').isLength({min: 10}).isString().trim(),
];

export const subscriptionValidation = [
    body('user.email', 'Enter correct email').isEmail(),
]