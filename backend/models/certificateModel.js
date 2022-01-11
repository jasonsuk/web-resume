import mongoose from 'mongoose';

const certificateSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Certificate name is required.'],
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'Write a short summary of the certificate.'],
    },
    organization: {
      type: String,
      required: [true, 'Enter an issuing organization.'],
    },
    completedAt: {
      type: Date,
      required: [true, 'Write a date of completion.'],
    },
    isKeyCertificate: {
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

const Certificate = mongoose.model('Certificate', certificateSchema);
export default Certificate;
