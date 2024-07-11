import './App.css'
import { useState } from 'react';
import * as starShipSearch from './services/starShipService'
import StarShipSearch from './components/StarShipSearch';
import StarShipList from './components/StarShipList';

function App() {
  const [starShip, setStarShip] = useState([]);

  const fetchData = async (ship) => {
    const data = await starShipSearch.show(ship);
    const newShip = {
      name: data.results[0].name,
      class: data.results[0].starship_class,
      manufacturer: data.results[0].manufacturer,
      model: data.results[0].model,
    };
    setStarShip(...starShip, newShip);
  }

  return (
    <>
      <main>
        <h1>Star Wars API</h1>
        <StarShipSearch fetchData={fetchData} />
        <StarShipList starShip={starShip} />
      </main>
    </>
  )
}

export default App
