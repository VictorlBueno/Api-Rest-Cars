import baseError from './baseError.js'

// Create a custom 'notFound' error class that extends the 'baseError' class
class notFound extends baseError {
    constructor() {
        super('Page not found', 404)
    }
}

export default notFound