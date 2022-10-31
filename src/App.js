import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PropertyCard from './Card';
import { useEffect, useState } from 'react';
import NavScrollExample from './Navbar';
import { Row, Col } from 'react-bootstrap';  

function ShowProperties ({ properties, filterText}) {
    return(
      <>
      <Row>
      {properties.map((property, index) => {

        if (property.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1 || property.location.city.toLowerCase().indexOf(filterText.toLowerCase()) === -1) 
        {
          return;
        }

        return (
          <Col className="col-6" key={index}>
          <PropertyCard property={property} key={index} />
          </Col>
        )
      })}
      </Row>
    </>
    );
  }

function FilterablePropertyList(){

    const [filterText, setFilterText] = useState('');


    const[properties, setProperties] = useState([])
 
    useEffect(() => {
      fetch("http://localhost:3000/properties.json")
      .then(response => response.json())
      .then(json => setProperties(json))
      console.log("properties", properties)
   }, [])


    return (
      <>
        <NavScrollExample onFilterTextChange={setFilterText}/>
        <ShowProperties properties = {properties} filterText={filterText} />
     </>
    
    );
}
  
export default function App(){
  return <FilterablePropertyList/>;
}
