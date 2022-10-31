import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PropertyCard from './Card';
import { useEffect, useState } from 'react';
import NavScrollExample from './Navbar';
import { Row, Col } from 'react-bootstrap';

function App() {
  const[properties, setProperties] = useState([])
 
  useEffect(() => {
    fetch("http://localhost:3000/properties.json")
    .then(response => response.json())
    .then(json => setProperties(json))
    console.log("properties", properties)
  }, [])

  const ShowProperties = function() {
    return(
      <>
      <Row>
      {properties.map((property, index) => {
        return (
          <Col className="col-6">
          <PropertyCard property={property} key={index} />
          </Col>
        )
      })}
      </Row>
    </>
    );
  }

  return (
    <>
      <NavScrollExample />
      {ShowProperties()}
    </>
  );
}

export default App;
