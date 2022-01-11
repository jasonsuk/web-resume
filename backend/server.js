// Load packages (ES6)
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import connectDB from './config/database.js';

// Initialize environmental variables
dotenv.config();

// Initialize express server app
const app = express();

// Connect to the database
connectDB();

// Third-party middleware for logging on development node
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

// Middlware to read req.body in JSON
app.use(express.json());

// Routing
app.get('/', (req, res) => {
  res.send('API is running');
});

// Run server
const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(
    `The server running in ${process.env.NODE_ENV} mode on PORT ${PORT}.`
  )
);
