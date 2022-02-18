// Load packages (ES6)
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import xss from 'xss-clean';
import hpp from 'hpp';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
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

// Middleware to prevent MongoDB operator injection
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Rate limiting - up to 100 requests per 10 minutes
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100,
});
app.use(limiter);

// Third-party middleware for logging on development node
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/portfolios', PortfolioRouter);
app.use('/api/blogs', BlogRouter);
app.use('/api/certificates', CertificateRouter);
app.use('/api/skills', SkillRouter);
app.use('/api/contacts', ContactRouter);
app.use('/api/users', UserRouter);
app.use('/uploads', FileUploadRouter);

// Set the root directory
const __dirname = path.resolve();
// Set folders static
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Make frontend as a static folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  // Any routes that are not specified
  // point to 'index.html'
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
  );
} else {
  // Routing
  app.get('/', (req, res) => {
    res.send('API is running');
  });
}

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
