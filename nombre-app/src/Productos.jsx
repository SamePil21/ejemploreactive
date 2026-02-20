// src/Productos.jsx
import { useEffect, useState } from "react";
import api from "./Services/axios";
import "./Productos.css";

function Productos() {
    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await api.get("products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            } finally {
                setLoading(false);
            }
        };
        obtenerProductos();
    }, []);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div>
            <main className="classMain">
                <header>
                    <h1>Nuestro Catálogo</h1>
                </header>

                {productos.map((producto) => (
                    <article className="product-card" key={producto.id}>
                        <img src={producto.image} alt={producto.title} />
                        <span>
                            {producto.category}
                        </span>
                        <h2>{producto.title}</h2>
                        <h3>{producto.price}</h3>
                    </article>
                ))}
            </main>
        </div>
    );
}

export default Productos;