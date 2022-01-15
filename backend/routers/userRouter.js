import express from 'express';
import {
  signInUser,
  registerUser,
  getUsers,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/login').post(signInUser);
router
  .route('/')
  .post(protect, admin, registerUser)
  .get(protect, admin, getUsers);
router
  .route('/:id')
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);

export default router;
