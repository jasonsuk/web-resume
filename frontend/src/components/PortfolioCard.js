import React from 'react';
import { Card } from 'react-bootstrap';

const PortfolioCard = ({ portfolio }) => {
  return (
    <>
      <Card className='mt-5'>
        {portfolio.image.length > 0 && (
          <a href={portfolio.url} target='_blank' rel='noopener noreferrer'>
            <Card.Img src={portfolio.image} />
          </a>
        )}
        <Card.Body>
          <a href={portfolio.url} target='_blank' rel='noopener noreferrer'>
            <Card.Title as='h3'>
              {portfolio.name.length > 50
                ? portfolio.name.substring(0, 50) + '...'
                : portfolio.name}
            </Card.Title>
            <Card.Text as='h4'>
              {portfolio.summary.length > 200
                ? portfolio.summary.substring(0, 200) + '...'
                : portfolio.summary}
            </Card.Text>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default PortfolioCard;
