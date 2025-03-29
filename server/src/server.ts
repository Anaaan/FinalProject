import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
import app from './app'

// Load environment variables (only if needed for other configs)
dotenv.config()

const MONGODB_URI="mongodb+srv://abdullaanan017:anan17@cluster0.agkyl.mongodb.net/"

const mongooseOpts: ConnectOptions = {
  autoIndex: true, // Optional: to enable automatic index creation
}

mongoose
  .connect(MONGODB_URI, mongooseOpts)
  .then(() => {
    console.log('Connected To Database')
    app.listen(process.env.PORT || 5000, () => {
      console.log(`App running on port ${process.env.PORT || 5000}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })
