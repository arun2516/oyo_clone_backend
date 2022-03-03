require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const cors = require("cors")
const path = require('path')
const roomsRoutes = require('./routes/roomsRoute')
const userRoute = require('./routes/userRoute')
const bookingsRoute=require('./routes/bookingsRoute')
const mongoose = require('mongoose')

app.use(cors())

app.use('/api/rooms',roomsRoutes)
app.use('/api/users' , userRoute)
app.use('/api/bookings' , bookingsRoute)



const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
  
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB')
})


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Node JS Server Started`))
