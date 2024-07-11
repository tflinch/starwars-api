import './App.css'
import { useState, useEffect } from 'react';
import * as starShipSearch from './services/starShipService'
import StarShipSearch from './components/StarShipSearch';
import StarShipList from './components/StarShipList';

function App() {
  const [starShip, setStarShip] = useState([]);

  useEffect(() => {

    // Define a fetch function:
    const fetchDefaultData = async () => {
      const data = await starShipSearch.defualt();
      const newShip = data.results.map(starShip => {
        return {
          name: starShip.name,
          class: starShip.starship_class,
          manufacturer: starShip.manufacturer,
          model: starShip.model,
        }
      });
      console.log('NewShip:', newShip)
      setStarShip(newShip);
    };
    fetchDefaultData();
  }, []);

  const fetchData = async (ship) => {
    const data = await starShipSearch.show(ship);
    const newShip = data.results.map(starShip => {
      return {
        name: starShip.name,
        class: starShip.starship_class,
        manufacturer: starShip.manufacturer,
        model: starShip.model,
      }
    });

    setStarShip(newShip);
  }

  return (
    <>
      <main>
        <h1>Star Wars API</h1>
        <StarShipSearch fetchData={fetchData} />
        <StarShipList starShips={starShip} />
      </main>
    </>
  )
}

export default App
