import badRequest from '../errors/badRequest.js'
import baseError from '../errors/baseError.js'
import notFound from '../errors/notFound.js'

/* eslint-disable no-unused-vars */
// Function to handle errors and send appropriate error responses
function errorHandling(error, req, res, next) {
    // Check if the error is an instance of 'not found' error
    if (error instanceof notFound) {
        error.sendResponse(res)

    // Send the error received in cases of 'bad request'
    } else if (error.response && error.response.status === 400) {
        new badRequest(error, res)

    // If it's not a 'not found' or 'bad request' error, send a generic error response
    } else {
        new baseError().sendResponse(res)
    }

}

export default errorHandling