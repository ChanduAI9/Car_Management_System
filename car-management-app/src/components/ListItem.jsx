// src/components/ListItem.jsx
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ListItem = ({ vehicle, deleteVehicle }) => {
  return (
    <Card className="vehicle-card">
      <Card.Img variant="top" src={vehicle.image || "/images/car.jpg"} />
      <Card.Body>
        <Card.Title>{vehicle.title}</Card.Title>
        <Card.Text>{vehicle.description}</Card.Text>
        <Button variant="danger" onClick={() => deleteVehicle(vehicle.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default ListItem;
