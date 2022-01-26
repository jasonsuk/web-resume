import React from 'react';
import { Card } from 'react-bootstrap';

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
          <a href={portfolio.url} target='_blank' rel='noopener noreferrer'>
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
          </a>
          <hr></hr>
          <Card.Text as='p'>
            {portfolio.description.length > 120
              ? portfolio.description.substring(0, 120) + '...'
              : portfolio.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PortfolioCard;
