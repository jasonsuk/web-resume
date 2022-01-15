import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protect = asyncHandler(async (req, res, next) => {
  // Authorize a user access
  // only if a token is validated, mathing the decoded id in the database

  let token;

  if (
    // Token will be embedded in headers
    // in a format 'Bearer 123x234819x83...123'
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const token = req.headers.authorization.split(' ')[1];

      // Embed a user detail in req.user
      // {userId: '61e273168fd22602aad61927', iat: 1642230550, exp: 1644822550}
      const decoded = jwt.decode(token, process.env.SECRET_KEY);
      req.user = await User.findById(decoded.userId).select('-password');
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized - token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized - no token or invalid token');
  }

  // Pass along 'req.user' to controller(s)
  next();
});

// 'admin' middleware must come after 'protect' and
// before controllers

export const admin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as admin');
  }
});
