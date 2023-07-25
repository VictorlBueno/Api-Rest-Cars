import notFound from '../errors/notFound.js'

/* eslint-disable no-unused-vars */
// Function to handle 404 - Page not found error
function handler404(req, res, next) {
    const error404 = new notFound()
    next(error404)
}

export default handler404