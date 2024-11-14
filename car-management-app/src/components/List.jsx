// src/components/List.jsx
import React, { Component } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import ListItem from './ListItem';

class List extends Component {
  state = {
    isLoaded: false,
    vehicles: [],
    error: null
  };

  componentDidMount() {
    axios.get('http://localhost:8000/api/cars/', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    })
    .then(response => {
      this.setState({ isLoaded: true, vehicles: response.data });
    })
    .catch(error => {
      this.setState({ isLoaded: true, error });
    });
  }

  deleteVehicle = (id) => {
    axios.delete(`http://localhost:8000/api/cars/${id}/`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    })
    .then(() => {
      this.setState(prevState => ({
        vehicles: prevState.vehicles.filter(vehicle => vehicle.id !== id)
      }));
      alert("Vehicle deleted successfully");
    })
    .catch(error => {
      console.error("There was an error deleting the vehicle", error);
    });
  };

  render() {
    const { isLoaded, vehicles, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!isLoaded) {
      return <div className="d-flex justify-content-center"><Spinner animation="border" variant="primary" /></div>;
    }

    return (
      <Container>
        <Row>
          {vehicles.map(vehicle => (
            <Col key={vehicle.id} sm={12} md={6} lg={4}>
              <ListItem vehicle={vehicle} deleteVehicle={this.deleteVehicle} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default List;
