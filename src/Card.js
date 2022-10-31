import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';

export default function KitchenSinkExample({propertyVal}) {
  const [property, setProperty] = useState()

  setProperty(propertyVal)
  console.log("card", property)

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{property.title}</Card.Title>
        <Card.Text>
          {property.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{property.pricePerNight} per night</ListGroup.Item>
        <ListGroup.Item>Service Fee: {property.serviceFee}</ListGroup.Item>
        <ListGroup.Item>cleaningFee: {property.cleaningFee}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

