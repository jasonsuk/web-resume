import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer.js';
import { Form, Button } from 'react-bootstrap';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import { listBlogDetail, updateBlog } from '../redux/actions/blogActions.js';

import { BLOG_UPDATE_RESET } from '../redux/constants/blogConstants.js';

const BlogEditPage = () => {
  const { id } = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();

  const blogDetail = useSelector((state) => state.blogDetail);
  const { loading, error, blog } = blogDetail;

  const blogUpdate = useSelector((state) => state.blogUpdate);
  const { success: successUpdate } = blogUpdate;

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (successUpdate) {
      history('/admin/blog');
      dispatch({ type: BLOG_UPDATE_RESET });
    } else {
      if (!blog || blog._id !== id) {
        dispatch(listBlogDetail(id));
      } else {
        setTitle(blog.title);
        setBody(blog.body);
        setCategory(blog.category);
        setImage(blog.image);
        setUrl(blog.url);
      }
    }
  }, [dispatch, history, successUpdate, blog, id]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/uploads', formData, config);

      setTimeout(() => {
        setImage(data);
        setUploading(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateBlog({
        _id: id,
        title,
        body,
        category,
        image,
        url,
      })
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='warning'>{error}</Message>
      ) : (
        <FormContainer>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='title' className='mb-4'>
              <Form.Label>Blog title</Form.Label>
              <Form.Control
                type='text'
                placeholder='What is the best title for your blog?'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='body' className='mb-4'>
              <Form.Label>Blog body</Form.Label>
              <Form.Control
                type='textarea'
                row={10}
                placeholder='Write the details about your blog.'
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='category' className='mb-4'>
              <Form.Label>Blog category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Describe the releated topic for your blog.'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='image' className='mb-4'>
              <Form.Label>Blog image (Optional)</Form.Label>
              <Form.Control type='file' onChange={uploadFileHandler} />
              {uploading && (
                <Message variant='info'>
                  <span>
                    Uploading image...<br></br>This message will disappear when
                    an image is successfully loaded.
                  </span>
                </Message>
              )}
            </Form.Group>
            <Form.Group controlId='url' className='mb-4'>
              <Form.Label>Blog url (Optional)</Form.Label>
              <Form.Control
                type='text'
                row={10}
                placeholder='Write the external url for your blog, or leave it "#"'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Form.Group>
            <Button variant='primary' type='submit' className='btn btn-block'>
              Update
            </Button>
          </Form>
        </FormContainer>
      )}
    </>
  );
};

export default BlogEditPage;
