import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import {
  listBlogs,
  createBlog,
  deleteBlog,
} from '../redux/actions/blogActions.js';

import { BLOG_CREATE_RESET } from '../redux/constants/blogConstants.js';

const BlogListPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  const blogCreate = useSelector((state) => state.blogCreate);
  const { success: createSuccess, blog: newBlog } = blogCreate;

  const blogDelete = useSelector((state) => state.blogDelete);
  const { success: deleteSuccess } = blogDelete;

  useEffect(() => {
    if (createSuccess) {
      history(`/admin/blog/${newBlog._id}/edit`);
      dispatch({ type: BLOG_CREATE_RESET });
    } else {
      dispatch(listBlogs());
    }
  }, [dispatch, history, newBlog, createSuccess, deleteSuccess]);

  const createBlogHandler = () => {
    dispatch(createBlog());
  };

  const deleteBlogHandler = (blogId) => {
    if (window.confirm(`Deleting a blog ${blogId}. Are you sure?`)) {
      dispatch(deleteBlog(blogId));
    }
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='warning'>{error}</Message>
  ) : (
    <Container className='my-5'>
      <Row className='align-items-center'>
        <Col md={8}>
          <h2>List blogs</h2>
        </Col>
        <Col style={{ textAlign: 'end' }}>
          <Button
            variant='dark'
            size='md'
            className='px-3'
            onClick={() => createBlogHandler()}
          >
            + Create blog
          </Button>
        </Col>
      </Row>
      <Table
        striped
        bordered
        hover
        style={{
          verticalAlign: 'middle',
          textAlign: 'center',
          marginTop: '1.6rem',
        }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Category</th>
            <th>Last update</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog._id}</td>
              <td>{blog.title}</td>
              <td>
                {blog.body.length > 50
                  ? blog.body.substring(0, 50) + '...'
                  : blog.body}
              </td>
              <td>{blog.category}</td>
              <td>{blog.updatedAt.substring(0, 10)}</td>
              <td>
                <LinkContainer to={`/admin/blog/${blog._id}/edit`}>
                  <Button className='btn-icon' variant='warning' size='md'>
                    <i className='far fa-edit'></i>
                  </Button>
                </LinkContainer>
              </td>
              <td>
                <Button
                  className='btn-icon'
                  variant='danger'
                  size='md'
                  onClick={() => deleteBlogHandler(blog._id)}
                >
                  <i className='far fa-trash-alt'></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BlogListPage;
