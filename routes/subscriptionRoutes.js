import express from 'express'
import { validationErrors } from '../utilities/validationErrors.js'
import { subscriptionValidation } from '../validationsConfig.js'

import { 
    createSubscription, getAllSubscription
} from '../controllers/subscriptionController.js'

export const subscriptionRoutes = express.Router()

subscriptionRoutes.post('/subscription', subscriptionValidation, validationErrors, createSubscription)
subscriptionRoutes.get('/subscription', getAllSubscription)