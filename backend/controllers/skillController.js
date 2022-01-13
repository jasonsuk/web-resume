import asyncHandler from 'express-async-handler';
import Skill from '../models/skillModel.js';

// DESC: Get all skills
// ROUTE: GET /api/skills
// ACCESS: Public

export const getSkills = asyncHandler(async (req, res) => {
  const skills = await Skill.find({}).sort({ createdAt: -1 });
  res.status(200).json(skills);
});

// DESC: Get key skills
// ROUTE: GET /api/skills/keyskills
// ACCESS: Public

export const getKeySkills = asyncHandler(async (req, res) => {
  const keySkills = await Skill.find({ isKeySkill: true }).sort({
    createdAt: -1,
  });
  res.status(200).json(keySkills);
});

// DESC: Get a skill searched by id
// ROUTE: GET /api/skills/:id
// ACCESS: Public

export const getSkill = asyncHandler(async (req, res) => {
  const skillId = req.params.id;
  const skill = await Skill.findById(skillId);

  if (skill) {
    res.status(200).json(skill);
  } else {
    res.status(404);
    throw new Error(`Skill ${skillId} not found.`);
  }
});

// DESC: Add a skill
// ROUTE: POST /api/skills
// ACCESS: Private

export const addSkill = asyncHandler(async (req, res) => {
  const { name, maturity, score, isKeySkill } = req.body;
  // const user = req.user._id

  if (name && name.length === 0) {
    res.status(400);
    throw new Error(`No skill found.`);
  }

  const newSkill = await new Skill({
    name,
    maturity,
    score,
    isKeySkill,
    // user
  });

  const createdSkill = await newSkill.save();
  res.status(201).json(createdSkill);
});

// DESC: Update a skill
// ROUTE: PUT /api/skills/:id
// ACCESS: Private

export const updateSkill = asyncHandler(async (req, res) => {
  const skillId = req.params.id;
  const skill = await Skill.findById(skillId);

  if (skill) {
    const { name, maturity, score, isKeySkill } = req.body;

    // Update with new data
    skill.name = name || skill.name;
    skill.maturity = maturity || skill.maturity;
    skill.score = score || skill.score;
    skill.isKeySkill = isKeySkill || skill.isKeySkill;

    // Save the change
    const updatedSkill = await skill.save();

    // Send the updated skill data to the client
    res.status(200).json(updatedSkill);
  }
});

// DESC: Delete a skill
// ROUTE: DELETE /api/skills/:id
// ACCESS: Private

export const deleteSkill = asyncHandler(async (req, res) => {
  const skillId = req.params.id;
  const skill = await Skill.findById(skillId);

  // Remove the skill if exists, or send an error message
  if (skill) {
    await skill.remove();
    res.json({
      message: `Successfully deleted the skill ${skillId}`,
    });
  } else {
    res.status(404);
    throw new Error(`Skill ${skillId} not found.`);
  }
});
