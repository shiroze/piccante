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

app.listen(5000, () => {
    console.log("running at port 5000")
})