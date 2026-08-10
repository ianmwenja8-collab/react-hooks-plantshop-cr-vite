import React from "react";
import PlantCard from "./PlantCard.jsx";


function PlantList({ plants, onMarkSoldOut }) {
  return (
    <ul>
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onMarkSoldOut={onMarkSoldOut} />
      ))}
    </ul>
  );
}

export default PlantList;
