import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env') });


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    )
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    process.exit(1)
  }
};

export default connectDB;
