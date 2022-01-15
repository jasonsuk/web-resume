import express from 'express';
import {
  getCertificates,
  getCertificate,
  addCertificate,
  updateCertificate,
  deleteCertificate,
} from '../controllers/certificateController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getCertificates).post(protect, admin, addCertificate);
router
  .route('/:id')
  .get(getCertificate)
  .put(protect, admin, updateCertificate)
  .delete(protect, admin, deleteCertificate);

export default router;
