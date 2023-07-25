import mongoose from 'mongoose'

// Define the log schema using 'mongoose.Schema'
const logSchema = new mongoose.Schema({
    id: { type: String },
    date_time: { type: Date, required: true },
    car_id: { type: String, default: Date.now }
})

// Create the 'logs' model based on the 'logSchema'
const logs = mongoose.model('logs', logSchema)

export default logs