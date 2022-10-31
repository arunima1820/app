import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PropertyCard from './Card';
import { useEffect, useState } from 'react';
import NavScrollExample from './Navbar';

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
      {properties.map((property, index) => {
        return (
        <PropertyCard property={property} key={index} />)
      })}
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
