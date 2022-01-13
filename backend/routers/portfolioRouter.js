import express from 'express';
import {
  getPortfolios,
  getPortfolio,
  addPortfolio,
  updatePortfolio,
  deletePortfolio,
} from '../controllers/portfolioController.js';

const router = express.Router();

router.route('/').get(getPortfolios).post(addPortfolio);
router
  .route('/:id')
  .get(getPortfolio)
  .put(updatePortfolio)
  .delete(deletePortfolio);

export default router;
