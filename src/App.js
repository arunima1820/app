import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PropertyCard from './Card';
import { useEffect, useState } from 'react';

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
        console.log("app", property)
        return (
        <PropertyCard property={property} key={index} />)
      })}
    </>
    );
  }

  return (
    <>
      {ShowProperties()}
    </>
  );
}

export default App;
