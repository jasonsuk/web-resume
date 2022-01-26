// Load packages (ES6)
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import connectDB from './config/database.js';
import PortfolioRouter from './routers/portfolioRouter.js';
import BlogRouter from './routers/blogRouter.js';
import CertificateRouter from './routers/certificateRouter.js';
import SkillRouter from './routers/skillRouter.js';
import ContactRouter from './routers/contactRouter.js';
import UserRouter from './routers/userRouter.js';
import FileUploadRouter from './routers/fileUploadRouter.js';

import { notFoundError, errorHandler } from './middleware/errorHandler.js';

// Initialize environmental variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize express server app
const app = express();

// Middlware to read req.body in JSON
app.use(express.json());

// Third-party middleware for logging on development node
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

app.use('/api/portfolios', PortfolioRouter);
app.use('/api/blogs', BlogRouter);
app.use('/api/certificates', CertificateRouter);
app.use('/api/skills', SkillRouter);
app.use('/api/contacts', ContactRouter);
app.use('/api/users', UserRouter);
app.use('/api/uploads', FileUploadRouter);

// Set folders static
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Routing
app.get('/', (req, res) => {
  res.send('API is running');
});

// Error handler
app.use(notFoundError);
app.use(errorHandler);

// Run server
const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(
    `The server running in ${process.env.NODE_ENV} mode on PORT ${PORT}.`
  )
);
