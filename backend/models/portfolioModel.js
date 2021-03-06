import mongoose from 'mongoose';

const portfolioSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Portolio name is required.'],
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'Write a short summary of the portfolio.'],
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'Write a detailed description of the portfolio.'],
    },
    image: {
      type: String,
      default: '/uploads/image-sample-portfolio.jpg',
    },
    isKeyPortfolio: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      trim: true,
      required: [true, 'Write the url link to the portfolio.'],
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

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;
