import express from 'express'
import { configDotenv } from 'dotenv';

import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connect_mongodb.js';

const app = express()
configDotenv()
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json())
app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server running on port ${PORT}`)
})
