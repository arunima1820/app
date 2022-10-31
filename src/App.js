import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import KitchenSinkExample from './Card';
import { useEffect, useState } from 'react';

function App() {
  
  const[properties, setProperties] = useState([])
 
  useEffect(() => {
    fetch("http://localhost:3000/properties.json")
    .then(response => response.json())
    .then(json => setProperties(json))
    console.log("properties", properties)
  }, [])

  const PropertyCard = function(property) {
    return(
      <>
      {properties.map(property => {
        console.log("app", property)
        return (
        <KitchenSinkExample property={property} />)
      })}
    </>
    );
  }

  return (
    <>
      {PropertyCard(properties)}
    </>
  );
}

export default App;
