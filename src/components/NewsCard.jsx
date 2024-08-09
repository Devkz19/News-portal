import React from 'react';
import { Card } from 'react-bootstrap';

const NewsCard = ({ title, content, url, imageUrl }) => (
  <Card className="news-card">
    {imageUrl && <Card.Img variant="top" src={imageUrl} />}
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{content}</Card.Text>
      <Card.Link href={url} target="_blank">Read more</Card.Link>
    </Card.Body>
  </Card>
);

export default NewsCard;
