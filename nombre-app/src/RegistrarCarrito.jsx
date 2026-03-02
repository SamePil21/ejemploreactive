import React, { useState } from "react";
import api from "./Services/api";
import './RegistrarCarrito.css';

function RegistrarCarrito() {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/carts", {
                userId: 1,
                date: new Date().toISOString(),
                products: [
                    {
                        productId: parseInt(productId),
                        quantity: parseInt(quantity),
                    },
                ],
            });
            console.log("Carrito registrado:", response.data);
            alert("Carrito registrado exitosamente");
            setProductId("");
            setQuantity("");
        }
        catch (error) {
            console.error("Error al registrar el carrito:", error);
            alert("Error al registrar el carrito");
        }
    };

    return (
        <div className="registrar-carrito-container">
            <h1>Registrar Carrito</h1>
            <form onSubmit={handleSubmit} className="registrar-carrito-form">
                <label>
                    <input
                        type="number"
                        placeholder="ID usuario"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        required
                    />
                </label>

                <label>
                    <input
                        type="number"
                        placeholder="ID Producto"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <input
                        type="number"
                        placeholder="Cantidad"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Registrar Carrito</button>
            </form>
        </div>
    );
}

export default RegistrarCarrito;