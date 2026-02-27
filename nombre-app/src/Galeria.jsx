import "./Galeria.css";

function Galeria() {
  // Aquí pones tus links reales entre las comillas
  const imagenes = [
    { 
      id: 1, 
      url: "https://images.alphacoders.com/124/thumb-1920-1249697.jpg", 
      info: "Consola Retro" 
    },
    { 
      id: 2, 
      url: "https://images3.alphacoders.com/138/thumb-1920-1381417.jpg", 
      info: "Setup de Desarrollo" 
    },
    { 
      id: 3, 
      url: "https://images2.alphacoders.com/124/thumb-1920-1249759.jpg", 
      info: "Gaming Setup" 
    },
    { 
      id: 4, 
      url: "https://images4.alphacoders.com/124/thumb-1920-1249693.jpg", 
      info: "Código Matrix" 
    }
    
  ];

  return (
    <div className="contenedor-galeria">
      <h1 className="titulo-galeria">Nuestra Galería</h1>
      <div className="grid-galeria">
        {imagenes.map((img) => (
          <div key={img.id} className="tarjeta-galeria">
            <img src={img.url} alt="Galeria" />
            <div className="capa-info">
              <p>{img.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;