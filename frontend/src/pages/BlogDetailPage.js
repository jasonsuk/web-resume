import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Banner from '../components/Banner.js';
import { Container, Row, Button } from 'react-bootstrap';

import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import { listBlogDetail } from '../redux/actions/blogActions.js';

const BlogDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const blogDetail = useSelector((state) => state.blogDetail);
  const { loading, error, blog } = blogDetail;

  useEffect(() => {
    dispatch(listBlogDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <section>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='warning'>{error}</Message>
        ) : (
          <Container>
            <Banner subject={blog && blog.title} body={blog && blog.subtitle} />
            <Row>
              <p style={{ minHeight: '30rem', fontSize: '1.6rem' }}>
                {blog && blog.body}
              </p>
              <LinkContainer
                to={blog ? blog.url : '#'}
                className='d-grid gap-2 mt-5'
              >
                <Button variant='dark'>Explore details</Button>
              </LinkContainer>
            </Row>
          </Container>
        )}
      </section>
    </>
  );
};

export default BlogDetailPage;
