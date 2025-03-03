import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
import app from './app'

// Load environment variables (only if needed for other configs)
dotenv.config()

const mongoUri = 'mongodb+srv://ddb:anan17@dd.pbbhn.mongodb.net/?retryWrites=true&w=majority&appName=dd'

const mongooseOpts: ConnectOptions = {
  autoIndex: true, // Optional: to enable automatic index creation
}

mongoose
  .connect(mongoUri, mongooseOpts)
  .then(() => {
    console.log('Connected To Database')
    app.listen(process.env.PORT || 5000, () => {
      console.log(`App running on port ${process.env.PORT || 5000}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })
