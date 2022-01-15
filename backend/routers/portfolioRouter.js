import express from 'express';
import {
  getPortfolios,
  getPortfolio,
  addPortfolio,
  updatePortfolio,
  deletePortfolio,
} from '../controllers/portfolioController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getPortfolios).post(protect, admin, addPortfolio);
router
  .route('/:id')
  .get(getPortfolio)
  .put(protect, admin, updatePortfolio)
  .delete(protect, admin, deletePortfolio);

export default router;
