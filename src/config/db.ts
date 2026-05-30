import mongoose from 'mongoose';
import config from './config.js';

export const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('Connected to MongoDB');
    });
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });
    await mongoose.connect(config.dbUri);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
