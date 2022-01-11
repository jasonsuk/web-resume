import mongoose from 'mongoose';

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Please enter your name.'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: 'Please enter a valid email.',
      },
      required: [true, 'Please enter your email address.'],
    },
    message: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Please write a short message.'],
    },
    isResponded: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
