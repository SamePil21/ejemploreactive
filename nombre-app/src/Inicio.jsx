// src/Inicio.jsx
import React from 'react';
import './Productos.css'; // Asegúrate de que aquí esté el CSS de las cards

function Inicio() {
  // Los items para tus nuevas cards
  const itemsCards = [
    {
      id: 1,
      titulo: "Sakura Card Captor",
      descripcion: "Colección de cartas mágicas y báculos.",
      imagen: "https://images.alphacoders.com/124/thumb-1920-1249697.jpg",
      link: "#"
    },
    {
      id: 2,
      titulo: "Genshin Impact",
      descripcion: "Explorando los paisajes y personajes de Teyvat.",
      imagen: "https://images.alphacoders.com/124/thumb-1920-1249697.jpg",
      link: "#"
    },
    {
      id: 3,
      titulo: "Gravity Falls",
      descripcion: "Misterios ocultos en el diario número 3.",
      imagen: "https://images.alphacoders.com/124/thumb-1920-1249697.jpg",
      link: "#"
    },
    {
      id: 4,
      titulo: "The Owl House",
      descripcion: "Aventuras mágicas en las Islas Hirvientes.",
      imagen: "https://images.alphacoders.com/124/thumb-1920-1249697.jpg",
      link: "#"
    }
  ];

  return (
    <div className="inicio-contenedor">
      <header style={{ textAlign: 'center', margin: '40px 0' }}>
        <h1 style={{ color: '#fff' }}>Bienvenido a Inicio</h1>
      </header>

      <div className="cardsDiv">
        {itemsCards.map((item) => (
          <article key={item.id} className="card">
            <img src={item.imagen} alt={item.titulo} />
            <h1>{item.titulo}</h1>
            <p>{item.descripcion}</p>
            {/* Agregué el botón para que use tu estilo de CSS */}
            <a href={item.link} className="btn-comprar" style={{textDecoration: 'none', display: 'inline-block', marginBottom: '20px'}}>
                Ver más
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Inicio;