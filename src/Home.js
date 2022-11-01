import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PropertyCard from './Card';
import { useEffect, useState } from 'react';
import NavScrollExample from './Navbar';
import { Row, Col } from 'react-bootstrap';  

function ShowProperties ({ properties, filterText, setSelectedProperty}) {

  const propertyItems = [];
  
  properties.map((property, index) => {
    if (property.title.toLowerCase().includes(filterText.toLowerCase()) || property.location.city.toLowerCase().includes(filterText.toLowerCase()) || property.location.state.toLowerCase().includes(filterText.toLowerCase()) ) {
      propertyItems.push(
        <PropertyCard 
            property={property} 
            key={index} 
            expanded={false}
            setSelectedProperty={setSelectedProperty}
        />
      )
    }
  })

    return(   
      <>
      <Row>
      {propertyItems}
      </Row>
      </>
    );
  }

export default function Home({setSelectedProperty}){
    const [filterText, setFilterText] = useState('');
    const [properties, setProperties] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:3000/properties.json")
      .then(response => response.json())
      .then(json => setProperties(json))
      console.log("properties", properties)
    }, [])
  
    return (
      <>
        <NavScrollExample onFilterTextChange={setFilterText}/>
        <ShowProperties 
            properties = {properties} 
            filterText={filterText} 
            setSelectedProperty={setSelectedProperty}
        />
      </>
    
    );
}
