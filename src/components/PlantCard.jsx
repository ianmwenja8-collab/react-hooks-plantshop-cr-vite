import React from "react";


function PlantCard({ plant, onMarkSoldOut }) {
  return (
    <li data-testid="plant-item">
      <h4>{plant.name}</h4>
      <img src={plant.image} alt={plant.name} />
      <p>Price: {plant.price}</p>
      {plant.soldOut ? (
        <span style={{ color: "red" }}>Out of Stock</span>
      ) : (
        <button onClick={() => onMarkSoldOut(plant.id)}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
