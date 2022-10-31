import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import KitchenSinkExample from './Card';
import { useEffect, useState } from 'react';

function App() {
  
  const[properties, setProperties] = useState([])
  fetch("http://localhost:3000/properties.json")
  .then(response => response.json())
  .then(json => setProperties(json))
  console.log("properties", properties)
  return (
    <>
      {properties.map(property => {
        console.log("app", property)
        return (
        <KitchenSinkExample property={property} />)
      })}
    </>
  );
}

export default App;
