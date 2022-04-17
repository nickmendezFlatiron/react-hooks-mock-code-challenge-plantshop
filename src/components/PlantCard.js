import {React , useState} from "react";

function PlantCard({plant}) {
  const [toggleStock , setToggleStock] = useState(true)

  const {id , name , image , price} = plant

  function handleToggleStock(){
    setToggleStock(toggleStock => !toggleStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {toggleStock ? (
        <button className="primary" onClick={handleToggleStock}>In Stock</button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
