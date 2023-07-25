import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'
import errorHandling from './middlewares/errorHandling.js'
import handler404 from './middlewares/handler404.js'

// Set up the database connection and error handling
db.on('error', console.log.bind(console, 'Connection fail'))

db.once('open', () => {
    console.log('Connection successful')
})

// Create an instance of the express application
const app = express()

// Set up the routes for handling API requests
routes(app)

// Set up the middleware to handle 404 - Page not found error
app.use(handler404)

// Set up middleware to parse JSON data in requests
app.use(express.json())

// Set up the error handling middleware for the application
app.use(errorHandling)

export default app
