import axios from 'axios'
import logController from './logController.js'

// Define the URL of the external API
const externalApiAddress = 'http://api-test.bhut.com.br:3000/api/cars'

// Create a class 'carController' to handle car-related operations
class carController {
    // Static method to list cars from the external API
    static listCars = async (req, res, next) => {
        // Make a GET request to the external API and send the retrieved data as JSON
        try {
            const response = await axios.get(externalApiAddress)
            const data = response.data
            res.status(200).json(data)

        // If an error occurs, pass it to the 'next' middleware for error handling
        } catch (error) {
            next(error)
        }
    }

    // Static method to create a new car by making a POST request to the external API
    static createCar = async (req, res, next) => {
        // Make a POST request to the external API with the request body and send the response data as JSON
        try {
            const response = await axios.post(externalApiAddress, req.body)
            const data = response.data
            const id = data._id

            // Call the 'createLog' method from the 'logController' to save the log data
            await logController.createLog({ car_id: id, date_time: new Date(), requestBody: req.body })
            res.status(201).end(JSON.stringify(data))

        // If an error occurs, pass it to the 'next' middleware for error handling 
        } catch (error) {
            next(error)
        }
    }

}

export default carController
