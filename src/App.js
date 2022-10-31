import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PropertyCard from './Card';
import { useEffect, useState } from 'react';
import NavScrollExample from './Navbar';
import { Row, Col } from 'react-bootstrap';  

function ShowProperties ({ properties, filterText}) {

  const propertyItems = [];
  
  properties.map((property, index) => {
    if (property.title.toLowerCase().includes(filterText.toLowerCase()) || property.location.city.toLowerCase().includes(filterText.toLowerCase()) || property.location.state.toLowerCase().includes(filterText.toLowerCase()) ) {
      propertyItems.push(
        <Col className="col-6" key={index}>
        <PropertyCard property={property} key={index} />
        </Col>
      )
    }

    // if (property.title.toLowerCase()
    // .indexOf(filterText.toLowerCase()) === -1 
    // || property.location.city.toLowerCase()
    // .indexOf(filterText.toLowerCase()) === -1) 
    // {
    //   return;
    // }

    
  })

    return(   
      <>
      <Row>
      {propertyItems}
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
