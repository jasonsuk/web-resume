import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const BlogCard = ({ blog }) => {
  const blogCardImageStyle = {
    width: '18rem',
    height: '12rem',
  };

  const blogCardCategoryTextStyle = {
    color: '#6d3e5d',
    fontWeight: 800,
    textTransform: 'uppercase',
    fontSize: '0.8rem',
  };

  const blogCardLinkStyle = {
    position: 'absolute',
    bottom: '0.8rem',
    fontWeight: 800,
    fontSize: '0.8rem',
  };

  return (
    <>
      <Card className='card-blog'>
        <Card.Body>
          <Card.Text style={blogCardCategoryTextStyle}>
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
            </Col>
            <Col md={4} className='text-end'>
              <Card.Img style={blogCardImageStyle} src={blog.image} />
            </Col>
          </Row>
          <Card.Text style={blogCardLinkStyle}>
            <a
              href={blog.url ? blog.url : '/blog'}
              target='_blank'
              alt={blog.title}
              rel='noopener noreferrer'
            >
              Learn mode &rarr;{' '}
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogCard;
