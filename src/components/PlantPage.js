import {React , useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants , setPlants] = useState([])
  const[search , setSearch] = useState('')

  return (
    <main>
      <NewPlantForm setPlants={setPlants} plants={plants}/>
      <Search setSearch={setSearch} />
      <PlantList setPlants={setPlants} plants={plants} search={search}/>
    </main>
  );
}

export default PlantPage;
