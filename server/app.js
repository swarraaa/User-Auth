require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./db/connect')
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')

// database connection
connectDB()

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

const port = process.env.PORT || 8080
app.listen(port, console.log(`Listening on port ${port}...`))
