import express from 'express';
import {
  getSkills,
  getKeySkills,
  getSkill,
  addSkill,
  updateSkill,
  deleteSkill,
} from '../controllers/skillController.js';

const router = express.Router();

router.route('/').get(getSkills).post(addSkill);
router.route('/keyskills').get(getKeySkills);
router.route('/:id').get(getSkill).put(updateSkill).delete(deleteSkill);

export default router;
