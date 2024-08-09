import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewsCategory from '../components/NewsCategory';
import { Navbar, Nav, Container } from 'react-bootstrap';

const categories = [
  'all', 'national', 'business', 'sports', 'world', 'politics', 'technology', 'startup', 
  'entertainment', 'miscellaneous', 'hatke', 'science', 'automobile'
];

const HomePage = () => {
  return (
    <Router>
      <Navbar className="navbar-custom" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-brand-custom" href="#">News Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {categories.map(cat => (
                <Nav.Link as={Link} key={cat} to={`/${cat}`} className="nav-link-custom">
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Routes>
          <Route path="/" element={<NewsCategory category="all" />} />
          {categories.map(cat => (
            <Route key={cat} path={`/${cat}`} element={<NewsCategory category={cat} />} />
          ))}
        </Routes>
      </Container>
    </Router>
  );
};

export default HomePage;
