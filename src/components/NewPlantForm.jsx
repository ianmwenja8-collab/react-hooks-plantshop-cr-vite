import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({ name: "", image: "", price: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlant(formData);
    setFormData({ name: "", image: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Plant name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

        <input
        type="text"
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value})} />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}/>
      <button type="submit">Add Plant</button>
    </form>
  );
}
export default NewPlantForm;
