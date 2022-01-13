// Set a custom error to handle failed requests that passed on
// To be placed after all the routes @ server.js
export const notFoundError = (req, res, next) => {
  // Instantiate a new error
  // with 'Not found' message showing the request url that failed
  const error = new Error(`Not found -- ${req.originalUrl}`);
  res.status(404); // not found
  next(error);
};

// Now create an error handler with the custom error
export const errorHandler = (err, req, res, next) => {
  // Set the final status code
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statusCode);
  // Object to be sent to client side for error
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};
