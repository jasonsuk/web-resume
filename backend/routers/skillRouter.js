import express from 'express';
import {
  getSkills,
  getKeySkills,
  getSkill,
  addSkill,
  updateSkill,
  deleteSkill,
} from '../controllers/skillController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getSkills).post(protect, admin, addSkill);
router.route('/keyskills').get(getKeySkills);
router
  .route('/:id')
  .get(getSkill)
  .put(protect, admin, updateSkill)
  .delete(protect, admin, deleteSkill);

export default router;
