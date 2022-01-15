import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import getUserToken from '../utils/userToken.js';

// DESC:  Sign in user
// ROUTE: POST /api/users/login
// ACCESS: Private

// export const signInUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;
//
//   const user = await User.findOne({ email });
//
//   if (user && (await user.verifyPassword(password))) {
//     res.json({
//       id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       token: getUserToken(user._id),
//     });
//   } else {
//     res.status(401);
//     throw new Error('Invalid email or password.');
//   }
// });

// =============================================
// ADMIN USE
// =============================================

// DESC:  Register user
// ROUTE: POST /api/users
// ACCESS: Private, Admin

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existUser = await User.findOne({ email });

  if (existUser) {
    res.status(400);
    throw new Error(`${email} already exists.`);
  }

  const newUser = await User.create({
    name,
    email,
    password,
  });

  if (newUser) {
    res.json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      // token: getUserToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data.');
  }
});

// DESC:  Get users
// ROUTE: GET /api/users/
// ACCESS: Private, Admin

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 }).select('-password');
  res.status(200).json(users);
});

// DESC:  Update user
// ROUTE: PUT /api/users/:id
// ACCESS: Private, Admin

export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    req.body.isAdmin ? (user.isAdmin = true) : (user.isAdmin = false);

    const updatedUser = await user.save();

    res.status(200).json({
      id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error(`User ${req.params.id} do not exist.`);
  }
});

// DESC:  Delete user
// ROUTE: Delete /api/users/:id
// ACCESS: Private, Admin

export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: `Successfully deleted the user ${req.params.id}` });
  } else {
    res.status(400);
    throw new Error(`User ${req.params.id} do not exist.`);
  }
});
