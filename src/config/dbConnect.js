import mongoose from 'mongoose'

// Connect to the MongoDB database using the provided 'MONGO_ADDRESS' environment variable
mongoose.connect(process.env.MONGO_ADDRESS)
let db = mongoose.connection

export default db