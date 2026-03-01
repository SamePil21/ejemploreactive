import React, { useState } from "react";
import api from "./Services/api";
import './RegistrarProducto.css';

function RegistrarProducto() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoProducto = { title, price: parseFloat(price), description, category, image };
    try {
      await api.post("/products", nuevoProducto);
      alert("Producto registrado exitosamente");
      setTitle(""); setPrice(""); setDescription(""); setCategory(""); setImage("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="registrar-container">
      <h2>Registrar Producto</h2>
      <form onSubmit={handleSubmit} className="registrar-form">
        <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="number" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="text" placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="Categoría" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <input type="text" placeholder="URL Imagen" value={image} onChange={(e) => setImage(e.target.value)} required />
        <button type="submit" className="btn-registrar">Registrar Producto</button>
      </form>
    </div>
  );
}

export default RegistrarProducto;