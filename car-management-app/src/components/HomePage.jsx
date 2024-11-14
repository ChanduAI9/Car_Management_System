import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container className="text-center" style={{ marginTop: '100px' }}>
      <h1>Welcome to Car Management Application</h1>
      <p>Manage your cars with ease</p>
      <Link to="/add">
        <Button variant="primary" style={{ margin: '10px' }}>Add a New Car</Button>
      </Link>
      <Link to="/list">
        <Button variant="secondary" style={{ margin: '10px' }}>View My Cars</Button>
      </Link>
    </Container>
  );
};

export default HomePage;
