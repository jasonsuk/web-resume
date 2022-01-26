import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Card } from 'react-bootstrap';

const BlogCard = ({ blog }) => {
  return (
    <>
      <Card className='card-blog'>
        {blog.image.length > 0 && (
          <LinkContainer to={blog._id}>
            <Card.Img src={blog.image} />
          </LinkContainer>
        )}
        <Card.Body>
          <Card.Title as='h4'>
            {blog.title.length > 50
              ? blog.title.substring(0, 50) + '...'
              : blog.title}
          </Card.Title>
          <Card.Text as='p'>
            {blog.subtitle.length > 80
              ? blog.subtitle.substring(0, 80) + '...'
              : blog.subtitle}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogCard;
