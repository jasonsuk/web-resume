import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../components/Banner.js';
import BlogCard from '../components/BlogCard.js';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import { listBlogs } from '../redux/actions/blogActions.js';

const BlogPage = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <section>
          <Container>
            <Banner
              subject='Blog'
              body='Collecting daily commits to business topics, programming and analysis. Link to Medium page.'
            />
            <Row>
              {blogs.map((blog) => (
                <Col sm={12} key={blog._id}>
                  <BlogCard blog={blog} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default BlogPage;
