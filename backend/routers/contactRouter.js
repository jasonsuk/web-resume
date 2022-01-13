import express from 'express';
import {
  getContacts,
  makeContact,
  deleteContact,
} from '../controllers/contactController.js';

const router = express.Router();

router.route('/').get(getContacts).post(makeContact);
router.route('/:id').delete(deleteContact);

export default router;
