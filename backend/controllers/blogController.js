import asyncHandler from 'express-async-handler';
import Blog from '../models/blogModel.js';

// DESC: Get all blogs
// ROUTE: GET /api/blogs
// ACCESS: Public

export const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({}).sort({ updatedAt: -1 });
  res.status(200).json(blogs);
});

// DESC: Get a blog
// ROUTE: GET /api/blog/:id
// ACCESS: Public

export const getBlog = asyncHandler(async (req, res) => {
  const blogId = req.params.id;
  const blog = await Blog.findById(blogId);

  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(400);
    throw new Error(`Blog ${blogId} not found`);
  }
});

// DESC: Add a blog
// ROUTE: POST /api/blogs/
// ACCESS: Private

export const addBlog = asyncHandler(async (req, res) => {
  const newBlog = await new Blog({
    title: 'Write a title of the blog',
    body: 'Write more details using rich text editor.',
    category: 'Sample category',
  });

  const createdBlog = await newBlog.save();
  res.status(200).json(createdBlog);
});

// DESC: Update a blog
// ROUTE: PUT /api/blogs/:id
// ACCESS: Private

export const updateBlog = asyncHandler(async (req, res) => {
  const blogId = req.params.id;
  const blog = await Blog.findById(blogId);

  if (blog) {
    const { title, category, body, image, url } = req.body;

    blog.title = title || blog.title;
    blog.body = body || blog.body;
    blog.category = category || blog.category;
    blog.image = image || blog.image;
    blog.url = url || blog.url;

    const updatedBlog = await blog.save();
    res.status(200).json(updatedBlog);
  }
});

// DESC: Delete a blog
// ROUTE: DELETE /api/blogs/:id
// ACCESS: Private

export const deleteBlog = asyncHandler(async (req, res) => {
  const blogId = req.params.id;
  const blog = await Blog.findById(blogId);

  if (blog) {
    await blog.remove();
    res.json({
      message: `Successfully deleted the blog ${blogId}`,
    });
  } else {
    res.status(400);
    throw new Error(`Blog ${blogId} not found.`);
  }
});
