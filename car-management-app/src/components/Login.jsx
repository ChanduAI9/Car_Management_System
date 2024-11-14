// src/components/Login.jsx
import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    axios.post('http://localhost:8000/api/login/', { email, password })
      .then(response => {
        localStorage.setItem('auth_token', response.data.token);  // Store token in localStorage
        this.setState({ redirectToReferrer: true });
      })
      .catch(error => {
        this.setState({ error: 'Invalid credentials' });
      });
  };

  render() {
    if (this.state.redirectToReferrer) {
      return <Navigate to="/list" />;  // Redirect to My Cars page
    }

    return (
      <div>
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col sm={4}>Email:</Col>
            <Col sm={8}><Form.Control type="email" onChange={(e) => this.setState({ email: e.target.value })} required /></Col>
          </Row>
          <Row>
            <Col sm={4}>Password:</Col>
            <Col sm={8}><Form.Control type="password" onChange={(e) => this.setState({ password: e.target.value })} required /></Col>
          </Row>
          {this.state.error && <div className="error-message">{this.state.error}</div>}
          <Button type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
