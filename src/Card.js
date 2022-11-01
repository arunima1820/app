import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Col } from 'react-bootstrap';
import { useNavigate  } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

export default function PropertyCard(
  {
    property,
    expanded,
    setSelectedProperty
  }
  ) {

    function MoreInfoButton() {
      const navigate = useNavigate();
  
      function handleClick() {
        setSelectedProperty(property)
        navigate("/property");
      }
  
      return (<Button onClick={(e) => handleClick(e)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-square-fill" viewBox="0 0 16 16">
<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
&nbsp; More info
      </Button>
      );
    }

  function HomeButton() {
    const navigate = useNavigate();
  
    function handleClick() {
      navigate('/');
    }
  
    return (
      <Button onClick={handleClick}>
        Go Back
      </Button>
    );
  }

  return (
    <Col className="container-fluid">
    <Card style={expanded ? { width: '100%' } : { width: '18rem' }}>
    <Card.Header as="h6">{property.location.state}, {property.location.country}</Card.Header>
      <Card.Img variant="top" src={require(`./img/${property.img}`)} style={ expanded? {height: '60%'} : {}}/>
      <Card.Body>
        <Card.Title>{property.title}</Card.Title>
        <Card.Subtitle>{property.pricePerNight} per night</Card.Subtitle>
      </Card.Body>
      <Card.Body>
      {expanded && 
      <>
      <Card.Text>
          {property.description}
        </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item><b>Service Fee: </b>{property.serviceFee}</ListGroup.Item>
        <ListGroup.Item><b>Cleaning Fee: </b>{property.cleaningFee}</ListGroup.Item>
        <ListGroup.Item><img src="./bed.svg" width={20}/>&nbsp;<b>Beds: </b>{property.beds}&nbsp;<img src="./bath.svg" width={20}/>&nbsp;<b>Baths: </b>{property.bathrooms}</ListGroup.Item>
        <ListGroup.Item><img src="./amenities.svg"  width={20}/>&nbsp;<b>Amenities: </b>{property.amenities}</ListGroup.Item>
        <ListGroup.Item><img src="./type.svg" width={20}/>&nbsp;<b>Property Type: </b>{property.propertyType}</ListGroup.Item>

      </ListGroup>
        </>}
        {expanded? <HomeButton /> : <MoreInfoButton />}
      </Card.Body>
    </Card>
    </Col>
  );
};

