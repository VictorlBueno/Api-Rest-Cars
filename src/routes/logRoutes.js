import express from 'express'
import logController from '../controllers/logController.js'

const router = express.Router()

// Define the route and its corresponding handler
router
    .get('/api/logs', logController.listLogs)

export default router