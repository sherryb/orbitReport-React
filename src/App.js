import React, { useState } from 'react';

import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from "./components/satData.js";
// Linter throws an error for this import for some reason but it is working correctly
import SatelliteImage from './components/SatImage';


function App() {

  const [sat, setSat] = useState(satData)
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats)
  }

  return (
    <div>
      <Banner />
      <Buttons 
        filterByType = {filterByType}
        setSat = {setSat}
        displaySats = {displaySats}  
      />
      <Table sat={sat}/>
      <SatelliteImage />
    </div>
  );
}

export default App;
