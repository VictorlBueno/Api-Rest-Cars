import 'dotenv/config'
import app from './src/app.js'

// Defining the port on which the server will listen
const port = 3000

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
