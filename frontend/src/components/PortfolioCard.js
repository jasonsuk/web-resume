import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ portfolio }) => {
  return (
    <>
      <Card className='mt-5'>
        {portfolio.image.length > 0 && (
          <Link to={`/portfolio/${portfolio._id}`}>
            <Card.Img src={portfolio.image} />
          </Link>
        )}
        <Card.Body>
          <Link to={`/portfolio/${portfolio._id}`}>
            <Card.Title as='h3'>
              {portfolio.name.length > 50
                ? portfolio.title.substring(0, 50) + '...'
                : portfolio.title}
            </Card.Title>
            <Card.Text>
              {portfolio.summary.length > 200
                ? portfolio.summary.substring(0, 200) + '...'
                : portfolio.summary}
            </Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default PortfolioCard;
