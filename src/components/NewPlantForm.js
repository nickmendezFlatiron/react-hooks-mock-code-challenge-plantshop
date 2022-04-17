import {React , useState} from "react";

function NewPlantForm({setPlants , plants}) {

  const [plantName , setPlantName] = useState("")
  const [plantImage , setPlantImage] = useState('')
  const [plantPrice , setPlantPrice] = useState('')

  function handlePlantName(value){
    setPlantName(value)
  }

  function handlePlantImage(value){
    setPlantImage(value)
  }

  function handlePlantPrice(value){
    setPlantPrice(value)
  }

  function handleSubmit(e){
    e.preventDefault()

    const newPlant = {
      name: plantName ,
      image: plantImage ,
      price: parseFloat(plantPrice)
    }

    setPlants([...plants , newPlant])
    console.log(newPlant)
    setPlantImage('')
    setPlantName('')
    setPlantPrice('')
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plantName} onChange={(e) => handlePlantName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={plantImage} onChange={(e) => handlePlantImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantPrice} onChange={(e) => handlePlantPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
