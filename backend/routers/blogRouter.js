import express from 'express';
import {
  getBlogs,
  getBlog,
  addBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getBlogs).post(protect, admin, addBlog);
router
  .route('/:id')
  .get(getBlog)
  .put(protect, admin, updateBlog)
  .delete(protect, admin, deleteBlog);

export default router;
