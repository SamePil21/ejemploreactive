import React, { useState, useEffect } from "react";
import api from "./Services/api";
import "./Carrito.css";
import RegistrarCarrito from "./RegistrarCarrito";


function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerCarrito = async () => {
      try {
        const response = await api.get("/carts");
        const carts = response.data;

        if (!carts || carts.length === 0) {
          setCarrito([]);
          return;
        }

        const productosConDetalle = await Promise.all(
          carts.flatMap((cart) =>
            cart.products.map(async (item) => {
              const producto = await api.get(`/products/${item.productId}`);

              return {
                ...producto.data,
                quantity: item.quantity,
                cartId: cart.id,
              };
            })
          )
        );

        setCarrito(productosConDetalle);
      } catch (error) {
        console.error("Error al obtener el carrito:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerCarrito();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <header className="carrito-header">
        <h1>Carrito</h1>
      </header>
      
      <RegistrarCarrito />

      <main className="carrito-container">
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          carrito.map((item, index) => (
            <article key={`${item.id}-${index}`} className="carritoCard">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>Cantidad: {item.quantity}</p>
              <h3>Precio: ${item.price}</h3>
              <button className="btn-eliminar" onClick={()=>{removeCarrito(item.id)}}>Eliminar</button>
            </article>
          ))
        )}
      </main>
    </div>
  );
}

const removeCarrito = async (itemid) =>{
        try{
            const response = await api.delete(
                `/products/${itemid}`
            );

            console.log(response.data);
            alert('¡Carrito Eliminado con exito!');

        }catch (error){
            console.error(error);

        }
        }

export default Carrito;