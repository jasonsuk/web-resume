import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const BlogCard = ({ blog }) => {
  return (
    <>
      <Card className='card-blog'>
        <Card.Body>
          <Card.Text className='card-blog-category'>
            {blog.category}
            <span style={{ float: 'right', marginRight: '0.2rem' }}>
              Written on {blog.createdAt.substring(0, 10)}
            </span>
          </Card.Text>
          <Row className='mt-4'>
            <Col md={8}>
              <Card.Title as='h4' style={{ textDecoration: 'underline' }}>
                {blog.title.length > 50
                  ? blog.title.substring(0, 50) + '...'
                  : blog.title}
              </Card.Title>
              <Card.Text as='p' className='mt-3'>
                {blog.body.length > 800
                  ? blog.body.substring(0, 80) + '...'
                  : blog.body}
              </Card.Text>
              <Card.Text className='card-blog-link'>
                <a
                  href={blog.url ? blog.url : '/blog'}
                  target='_blank'
                  alt={blog.title}
                  rel='noopener noreferrer'
                >
                  &#128279; Explore more
                </a>
              </Card.Text>
            </Col>
            <Col md={4} className='text-end'>
              <Card.Img className='card-blog-img' src={blog.image} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogCard;
