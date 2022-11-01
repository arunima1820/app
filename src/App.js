import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PropertyCard from "./Card";
import Home from "./Home";

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState({})
  
  return(
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home setSelectedProperty={setSelectedProperty}/>} />
        <Route path="/property" 
        element={<PropertyCard property={selectedProperty} expanded={true} />} />
      </Routes>
    </div>
  </Router>
  )
}