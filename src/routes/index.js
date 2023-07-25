import express from 'express'
import logs from './logRoutes.js'
import cars from './carRoutes.js'

// Define the routes for the application
const routes = (app) => {
    // Define a simple route to handle GET requests to the root path
    app.route('/').get((req, res) => {
        res.status(200).send('Hello, BHUT!')
    })

    app.use(
        // Set up middleware for parsing JSON data in requests
        express.json(),
        // Set up routes for handling logs and cars endpoints
        logs,
        cars
    )
}

export default routes