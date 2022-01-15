import express from 'express';
import {
  getContacts,
  makeContact,
  deleteContact,
} from '../controllers/contactController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(protect, admin, getContacts).post(makeContact);
router.route('/:id').delete(protect, admin, deleteContact);

export default router;
