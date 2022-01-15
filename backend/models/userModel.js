import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Create users for accesing the site
// admin purpose only

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      // lowercase: true,
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
        message: 'Please enter a valid email',
      },
      required: [true, 'Email required'],
    },
    password: {
      type: String,
      required: [true, 'Password required'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// // Verify password
// userSchema.methods.verifyPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };
//
// // Encrypting password for @POST /api/user
// userSchema.pre('save', async function (next) {
//   // Only apply when modifying password field
//   if (!this.isModified('password')) {
//     next();
//   }
//
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// Construct the User model and export
const User = mongoose.model('User', userSchema);
export default User;
