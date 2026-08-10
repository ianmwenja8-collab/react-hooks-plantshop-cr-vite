import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm.jsx";
import PlantList from "./PlantList.jsx";
import PlantCard from "./PlantCard.jsx";
import Search from "./Search.jsx";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  const addPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => setPlants([...plants, data]));
  };

  const markSoldOut = (id) => {
    setPlants(plants.map(p =>
      p.id === id ? { ...p, soldOut: true } : p
    ));
  };

  const filteredPlants = plants.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <NewPlantForm onAddPlant={addPlant} />
      <ul>
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onMarkSoldOut={markSoldOut}
          />
        ))}
      </ul>
    </main>
  );
}

export default PlantPage;
