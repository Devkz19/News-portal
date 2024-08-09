import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { Container, Row, Col } from 'react-bootstrap';

const NewsCategory = ({ category }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`https://inshortsapi.vercel.app/news?category=${category}`)
      .then(response => response.json())
      .then(data => setNews(data.data));
  }, [category]);

  return (
    <Container fluid>
      <Row>
        {news.map((item, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <NewsCard
              title={item.title}
              content={item.content}
              url={item.url}
              imageUrl={item.imageUrl} // Ensure this matches the API response field
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsCategory;
