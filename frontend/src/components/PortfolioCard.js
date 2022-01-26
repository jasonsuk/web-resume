import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PortfolioCard = ({ portfolio }) => {
  return (
    <>
      <Card className='card-portfolio'>
        {portfolio.image.length > 0 && (
          <a href={portfolio.url} target='_blank' rel='noopener noreferrer'>
            <Card.Img src={portfolio.image} />
          </a>
        )}
        <Card.Body>
          <Card.Title as='h3'>
            {portfolio.name.length > 50
              ? portfolio.name.substring(0, 50) + '...'
              : portfolio.name}
          </Card.Title>
          <Card.Text as='h5'>
            {portfolio.summary.length > 80
              ? portfolio.summary.substring(0, 80) + '...'
              : portfolio.summary}
          </Card.Text>

          <hr></hr>
          <Card.Text as='p'>
            {portfolio.description.length > 120
              ? portfolio.description.substring(0, 120) + '...'
              : portfolio.description}
          </Card.Text>
        </Card.Body>
        <Button
          variant='dark'
          href={portfolio.url}
          style={{ width: '95%', margin: '0 auto 1.2rem' }}
          target='_blank'
          rel='noopener noreferrer'
        >
          Explore details
        </Button>
      </Card>
    </>
  );
};

export default PortfolioCard;
