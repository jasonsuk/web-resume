import mongoose from 'mongoose';

// Set up connection to the database

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Connected to the MongoDB: ${db.connection.host}`);
  } catch (error) {
    console.error(`Failed to connect to the database due to ${error.message}`);
  }
};

export default connectDB;
