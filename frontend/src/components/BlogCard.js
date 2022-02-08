import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const BlogCard = ({ blog }) => {
  const blogCardImageStyle = {
    width: '300px',
    height: '200px',
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
          <Row>
            <Col sm={8}>
              <Card.Text style={blogCardCategoryTextStyle}>
                {blog.category}
              </Card.Text>
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
              <Card.Text style={blogCardLinkStyle}>
                {blog.image.length > 0 && (
                  <a
                    href={blog.url ? blog.url : '/blog'}
                    target='_blank'
                    alt={blog.title}
                    rel='noopener noreferrer'
                  >
                    Learn mode &rarr;{' '}
                  </a>
                )}
              </Card.Text>
            </Col>
            <Col sm={4} className='text-end'>
              <Card.Img style={blogCardImageStyle} src={blog.image} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogCard;
