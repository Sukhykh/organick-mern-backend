import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    additionalInfo: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
})

export default mongoose.model('Product', productSchema)