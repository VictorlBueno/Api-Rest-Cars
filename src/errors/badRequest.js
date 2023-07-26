import baseError from './baseError.js'

// Create a custom 'badRequest' error class that extends the 'baseError' class
class BadRequest extends baseError {
    constructor(error, res) {
        super()
        const status = error.response?.status
        const msg = error.response?.data?.msg

        // Send the response with the specified status and message
        res.status(status).json({ message: msg })
    }
}

export default BadRequest
