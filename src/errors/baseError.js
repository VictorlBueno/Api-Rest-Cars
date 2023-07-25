// Create a custom 'baseError' class that extends the 'Error' class
class baseError extends Error {

    // Constructor to set the error message and status
    constructor(message = 'Internal server error', status = 500) {
        super()
        this.message = message
        this.status = status
    }

    // Method to send the error response with the set message and status
    sendResponse(res) {
        res.status(this.status).send({
            message: this.message,
            status: this.status
        })
    }
    
}

export default baseError