import baseError from '../errors/baseError.js'
import notFound from '../errors/notFound.js'

/* eslint-disable no-unused-vars */
// Function to handle errors and send appropriate error responses
function errorHandling(error, req, res, next) {
    // Check if the error is an instance of 'notFound' error
    if (error instanceof notFound) {
        error.sendResponse(res)

    // If it's not a 'notFound' error, send a generic error response
    } else {
        new baseError().sendResponse(res)
    }

}

export default errorHandling