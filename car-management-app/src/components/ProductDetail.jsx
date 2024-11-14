import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class ProductDetail extends Component {
  state = {
    vehicle: {},
    error: ''
  };

  componentDidMount() {
    const productId = this.props.match.params.id;

    axios.get(`https://localhost:8000/api/products/${productId}`)
      .then(response => {
        this.setState({ vehicle: response.data });
      })
      .catch(error => {
        this.setState({ error: 'Failed to fetch product details' });
      });
  }

  deleteProduct = (id) => {
    axios.delete(`https://localhost:8000/api/products/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    })
    .then(() => {
      alert('Product deleted successfully');
      this.props.history.push('/list');
    })
    .catch(error => {
      this.setState({ error: 'Failed to delete product' });
    });
  };

  render() {
    const { vehicle, error } = this.state;
    if (error) return <div>{error}</div>;

    return (
      <div>
        <h2>{vehicle.title}</h2>
        <p>{vehicle.description}</p>
        <img src={vehicle.images} alt={vehicle.title} />
        <Button onClick={() => this.deleteProduct(vehicle.id)} variant="danger">Delete</Button>
      </div>
    );
  }
}

export default ProductDetail;
