import mongoose from 'mongoose';

const skillSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Portolio name is required.'],
    },
    maturity: {
      type: String,
      trim: true,
      enum: ['Beginner', 'Intermediate', 'Expert'],
      default: 'Beginner',
    },
    score: {
      type: Number,
      min: 0,
      max: 10,
      required: [true, 'Evaluate your score from 0 - 10'],
    },
    isKeySkill: {
      type: Boolean,
      default: false,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
