// Load packages (ES6)
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

// Initialize environmental variables
dotenv.config();

// Initialize express server app
const app = express();

// Third-party middleware for logging on development node
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

// Middlware to read req.body in JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(
    `The server running in ${process.env.NODE_ENV} mode on PORT ${PORT}.`
  )
);
