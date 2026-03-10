import React, { useState, useEffect } from "react";
import api from "./Services/api"; 
import "./Productos.css";
import RegistrarProducto from "./RegistrarProducto";
function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); 

  const obtenerProductos = async () => {
    try {
      const response = await api.get("/products");
      setProductos(response.data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const removeProducto = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      alert('¡Producto Eliminado!');
      setProductos(productos.filter(p => p.id !== id));
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  if (loading) return <p style={{color: 'white', textAlign: 'center'}}>Cargando catálogo...</p>;

  return (
    <div className="productos-seccion">
      <header className="productos-header">
        <h1>Nuestro Catálogo</h1>
      </header>

      <RegistrarProducto />

      <main className="cardsDiv"> 
        {productos.map((producto) => (
          <article key={producto.id} className="card">
            <img src={producto.image} alt={producto.title} />
            <h1>{producto.title}</h1>
            <p>{producto.description}</p>
            <h3>${producto.price}</h3>
            <button className="btn-comprar">Comprar</button>
            <button className="btn-eliminar" onClick={() => removeProducto(producto.id)}>Eliminar</button>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Productos;