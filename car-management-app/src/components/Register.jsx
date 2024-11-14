// src/components/Register.jsx
import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class Register extends Component {
  state = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    error: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password, first_name, last_name } = this.state;

    // Making a POST request to the Django API
    axios.post('http://localhost:8000/api/create_user/', { email, password, first_name, last_name })
      .then(response => {
        alert("User registered successfully.");
        this.props.history.push('/login');  // Redirect to login after successful registration
      })
      .catch(error => {
        console.log(error.response); // Log the error response for debugging
        this.setState({ error: 'Error during registration' });
      });
  };

  render() {
    return (
      <div>
        <h2>Register</h2>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col sm={4}>First Name:</Col>
            <Col sm={8}><Form.Control type="text" onChange={(e) => this.setState({ first_name: e.target.value })} required /></Col>
          </Row>
          <Row>
            <Col sm={4}>Last Name:</Col>
            <Col sm={8}><Form.Control type="text" onChange={(e) => this.setState({ last_name: e.target.value })} required /></Col>
          </Row>
          <Row>
            <Col sm={4}>Email:</Col>
            <Col sm={8}><Form.Control type="email" onChange={(e) => this.setState({ email: e.target.value })} required /></Col>
          </Row>
          <Row>
            <Col sm={4}>Password:</Col>
            <Col sm={8}><Form.Control type="password" onChange={(e) => this.setState({ password: e.target.value })} required /></Col>
          </Row>
          {this.state.error && <div className="error-message">{this.state.error}</div>}
          <Button type="submit">Register</Button>
        </Form>
      </div>
    );
  }
}

export default Register;
