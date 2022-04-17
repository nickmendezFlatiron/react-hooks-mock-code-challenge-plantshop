import {React , useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({setPlants , plants , search}) {
  

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then (res => res.json())
    .then (plants => setPlants(plants))
  }, [])

  const searchPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
  const renderPlants = searchPlants.map(plant => <PlantCard plant={plant}/>)
  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
