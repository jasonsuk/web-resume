import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Tab, Nav, ListGroup } from 'react-bootstrap';
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

  const distinctCategories = [...new Set(blogs.map((blog) => blog.category))];

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
            <Tab.Container
              id='blog-tabs'
              defaultActiveKey={distinctCategories[0]}
            >
              <Row>
                <Col md={2}>
                  <Nav variant='pills' className='nav-blog'>
                    {distinctCategories.map((category) => (
                      <Nav.Item key={category} className='m-2'>
                        <Nav.Link
                          eventKey={category}
                          style={{
                            textTransform: 'capitalize',
                            fontSize: '1.0rem',
                            fontWeight: '700',
                            color: '#034ea2',
                          }}
                        >
                          {category}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Col>
                <Col md={10}>
                  <Tab.Content>
                    {blogs.map((blog) => (
                      <Tab.Pane eventKey={blog.category} key={blog._id}>
                        <BlogCard blog={blog} />
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </section>
      )}
    </>
  );
};

export default BlogPage;
