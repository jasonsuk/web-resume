import express from 'express';
import {
  getCertificates,
  getCertificate,
  addCertificate,
  updateCertificate,
  deleteCertificate,
} from '../controllers/certificateController.js';

const router = express.Router();

router.route('/').get(getCertificates).post(addCertificate);
router
  .route('/:id')
  .get(getCertificate)
  .put(updateCertificate)
  .delete(deleteCertificate);

export default router;
