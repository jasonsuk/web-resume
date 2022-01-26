import mongoose from 'mongoose';

// Frontend: BlogPage
// Design like an online newpaper stand with pagination

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Blog title is required.'],
    },
    subtitle: {
      type: String,
      trim: true,
      required: [true, 'Write a short summary of the blog.'],
    },
    body: {
      // To incorporate Draft.js rich text editor
      type: String,
      trim: true,
    },
    image: {
      type: String,
      default: '/uploads/image-1642777567091.jpg',
    },
    url: {
      // Url to Github page
      type: String,
      trim: true,
      default: '#',
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
