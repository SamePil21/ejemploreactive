import React, { useState } from "react";
import api from "./Services/api";
import './RegistrarCarrito.css';

function RegistrarCarrito() {
  const [userId, setUserId] = useState(""); // Estado corregido
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/carts", {
        userId: parseInt(userId),
        date: new Date().toISOString(),
        products: [
          {
            productId: parseInt(productId),
            quantity: parseInt(quantity),
          },
        ],
      });
      alert("Carrito registrado exitosamente");
      setUserId("");
      setProductId("");
      setQuantity("");
    } catch (error) {
      console.error("Error al registrar el carrito:", error);
      alert("Error al registrar el carrito");
    }
  };

  return (
    <div className="registrar-container">
      <h2>Registrar Carrito</h2>
      <form onSubmit={handleSubmit} className="registrar-form">
        <input
          type="number"
          placeholder="ID Usuario"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="ID Producto"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button type="submit" className="btn-registrar">Registrar Carrito</button>
      </form>
    </div>
  );
}

export default RegistrarCarrito;