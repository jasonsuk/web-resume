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
      lowercase: true,
      enum: ['beginner', 'intermediate', 'expert'],
      default: 'beginner',
    },
    score: {
      type: Number,
      min: 0,
      max: 10,
      required: [true, 'Evaluate your score from 0 - 10'],
    },
    category: {
      type: String,
      lowercase: true,
      enum: ['business', 'analytics', 'programming', 'general'],
      required: [
        true,
        'Select one category from the following: business, analytics, programming, general',
      ],
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
