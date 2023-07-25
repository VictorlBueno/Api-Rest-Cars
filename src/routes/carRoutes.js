import express from 'express'
import carController from '../controllers/carController.js'

const router = express.Router()

// Define the routes and their corresponding handlers
router
    .get('/api/listCars', carController.listCars)
    .post('/api/createCar', carController.createCar)

export default router