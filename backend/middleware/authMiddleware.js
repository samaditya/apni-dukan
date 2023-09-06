import jwt from 'jsonwebtoken';
import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from cookie
  if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Assuming your User model has a property named 'userId' (lowercase 'u')
      req.user = await User.findById(decoded.userId).select('-password');
      next();
    } catch (error) {
      console.error(error); // Use console.error instead of console.log for errors
      res.status(401);
      throw new Error('Not authorized, token failed'); // Fixed typo
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, No token'); // Fixed typo
  }
});

// Admin middleware
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized admin');
  }
};

export { protect, admin };
