import express from "express"
import cors from 'cors'
import db from './config/database.js'
import userRoutes from './routes/index.js'

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected')
} catch (error) {
    console.log('Connection Error')
}
app.use(cors())
app.use(express.json())
// app.use(express.json())
app.use('/api/', userRoutes)

// Function to serve all static files
// inside public directory.
app.use('/images', express.static('public/images'));

// Defining port number
const PORT = 5000;    

// Server setup
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
})