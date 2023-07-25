import logs from '../models/Log.js'

// Create a class 'logController' to handle log-related operations
class logController {
    // Static method to list all logs from the database
    static listLogs = async (req, res, next) => {
        // Query the database to retrieve all logs and send the retrieved logs as JSON
        try {
            const logsData = await logs.find()
            res.status(200).json(logsData)

        // If an error occurs, pass it to the 'next' middleware for error handling
        } catch (error) {
            next(error)
        }
    }

    // Static method to create a new log entry in the database
    static createLog = async (logData) => {
        // Create a new 'logs' instance with the provided log data and save the log entry to the database
        try {
            const log = new logs(logData)
            await log.save()
            
        // If an error occurs, pass it to the 'next' middleware for error handling
        } catch (error) {
            console.error(error)
        }
    }
    
}

export default logController
