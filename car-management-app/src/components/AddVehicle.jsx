// src/components/AddVehicle.jsx
import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class AddVehicle extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    error: ''
  };

  handleFileChange = (event) => {
    this.setState({ image: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, image } = this.state;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    // Get the token from localStorage
    const token = localStorage.getItem('auth_token');

    // Ensure the token is included in the headers
    axios.post('http://localhost:8000/api/cars/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`  // Send token here
      }
    })
    .then(response => {
      alert('Vehicle added successfully');
      this.props.history.push('/list');  // Redirect to My Cars page
    })
    .catch(error => {
      this.setState({ error: 'Failed to add vehicle' });
      console.error("There was an error adding the vehicle", error);
    });
  };

  render() {
    return (
      <div>
        <h2>Add a Vehicle</h2>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col sm={4}>Title:</Col>
            <Col sm={8}><Form.Control type="text" onChange={(e) => this.setState({ title: e.target.value })} required /></Col>
          </Row>
          <Row>
            <Col sm={4}>Description:</Col>
            <Col sm={8}><Form.Control as="textarea" rows={3} onChange={(e) => this.setState({ description: e.target.value })} required /></Col>
          </Row>
          <Row>
            <Col sm={4}>Image:</Col>
            <Col sm={8}><Form.Control type="file" onChange={this.handleFileChange} required /></Col>
          </Row>
          {this.state.error && <div className="error-message">{this.state.error}</div>}
          <Button type="submit">Add Vehicle</Button>
        </Form>
      </div>
    );
  }
}

export default AddVehicle;
