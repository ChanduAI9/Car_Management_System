import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('auth_token') !== null;
};

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    window.location.reload();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* Logo aligned to the left */}
        <Navbar.Brand as={Link} to="/">Car Management</Navbar.Brand>
        
        {/* Navbar toggler for smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Navbar links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {isAuthenticated() ? (
              <>
                <Nav.Link as={Link} to="/add">Add Car</Nav.Link>
                <Nav.Link as={Link} to="/list">My Cars</Nav.Link>
                <Nav.Link>
                  <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
