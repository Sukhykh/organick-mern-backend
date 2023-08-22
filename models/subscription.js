import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    }
})

export default mongoose.model('Subscription', subscriptionSchema)