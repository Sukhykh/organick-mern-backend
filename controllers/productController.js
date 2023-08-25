import Product from '../models/product.js';
import { deleteFile } from '../utilities/deleteFile.js';
import fs from 'fs';

export const createProduct = async (req, res, next) => {
    try {
        const imageFile = req.file
        if (!imageFile) return next(new Error('Attached file is not an image'))
        const image = imageFile.path;
        const product = new Product({
            title: req.body.title, 
            tag: req.body.tag,
            rating: req.body.rating,
            price: req.body.price, 
            discount: req.body.discount,
            description: req.body.description, 
            productDescription: req.body.productDescription,
            additionalInfo: req.body.additionalInfo,
            image: image
        })
        await product.save()
        return res.status(200).json({ message: 'Product was cdreated successfly!' })
    } catch (error) {
        return next(error)
    }
}

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        if (!products) return next(new Error('Products not found'))
        return res.json(products)
    } catch (error) {
        return next(error)
    }
}

export const getOneProduct = async (req, res, next) => {
    try {
        const prodId = req.params.productId
        const product = await Product.findById(prodId)
        if (!product) return next(new Error('Product not found'))
        return res.json(product)
    } catch (error) {
        return next(error)
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        const imageFile = req.file
        const prodId = req.params.productId
        const product = await Product.findById(prodId)
        if (!product) return next(new Error('Product not found'))
        product.title = req.body.title
        product.tag = req.body.tag
        product.rating = req.body.rating
        product.price = req.body.price
        product.discount = req.body.discount
        product.description = req.body.description
        product.productDescription = req.body.productDescription
        product.additionalInfo = req.body.additionalInfo
        if (imageFile) {
            deleteFile(product.image)
            product.image = imageFile.path
        }
        await product.save()
        return res.status(200).json({ message: 'Product was updated successfly!' })
    } catch (error) {
        return next(error)
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const prodId = req.params.productId;
        const oldProduct = await Product.findOne({ _id: prodId });
        if (!oldProduct) res.status(500).json({ message: 'Product not found' });
        const imagePath = oldProduct.image;
        deleteFile(imagePath)
        await Product.findOneAndDelete({ _id: prodId });
        const doc = await Product.findOne({ _id: prodId })
        if (!doc) res.status(200).json({ succes: `Product was deleted successfly!` });
        else res.status(500).json({ message: 'Failed to delete product' })
    } catch (error) {
        return next(error)
    }
}

