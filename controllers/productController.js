import Product from '../models/product.js';

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
        const prodId = req.body.productId
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
        const prodId = req.body.productId
        const product = await Product.findById(prodId)
        if (!product) return next(new Error('Product not found'))
        deleteFile(product.image)
        const oldProduct = await Product.deleteOne(({ _id: prodId }))
        if (!oldProduct) return next(new Error('Failed to delete product'))
        return res.status(200).json({ message: 'Product was deleted successfly!' })
    } catch (error) {
        return next(error)
    }
}

