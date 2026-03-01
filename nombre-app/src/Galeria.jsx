import "./Galeria.css";

function Galeria() {
  // 1
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

  // 2
  const imagenes2 = [
    {
      id: 5,
      url: "https://images3.alphacoders.com/140/thumb-1920-1405394.jpg",
      info: "Identity V - Night Watch"
    },
    {
      id: 6,
      url: "https://images7.alphacoders.com/139/thumb-1920-1399103.jpg",
      info: "Identity V - Survivors Group"
    },
    {
      id: 7,
      url: "https://images2.alphacoders.com/139/thumb-1920-1399102.jpg",
      info: "Identity V - Bloody Mary"
    },
    {
      id: 8,
      url: "https://images.alphacoders.com/140/thumb-1920-1405396.jpg",
      info: "Identity V - Wu Chang"
    }
  ];
  const imagenes3 = [
    {
      id: 9,
      url: "https://c4.wallpaperflare.com/wallpaper/362/484/886/identity-v-picture-in-picture-sweat-crying-smiling-hd-wallpaper-preview.jpg",
      info: "Identity V - Night Watch"
    },
    {
      id: 10,
      url: "https://images5.alphacoders.com/112/1129532.jpg",
      info: "Identity V - Survivors Group"
    },
    {
      id: 11,
      url: "https://c4.wallpaperflare.com/wallpaper/891/855/714/identity-v-tie-yaoi-male-top-hat-hd-wallpaper-preview.jpg",
      info: "Identity V - Bloody Mary"
    },
    {
      id: 12,
      url: "https://images5.alphacoders.com/124/thumb-1920-1249765.jpg",
      info: "Identity V - Wu Chang"
    }
  ];

  return (
    <div className="contenedor-galeria">
      <h1 className="titulo-galeria">Nuestra Galería</h1>
      
      {/* galeria superior  */}
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

      {/* galeria parte de abajo 2  */}
      <div className="grid-galeria">
        {imagenes2.map((img) => (
          <div key={img.id} className="tarjeta-galeria">
            <img src={img.url} alt="Identity V Wallpaper" />
            <div className="capa-info">
              <p>{img.info}</p>
            </div>
          </div>
        ))}
      </div>
            {/* galeria parte de abajo 3  */}
      <div className="grid-galeria">
        {imagenes3.map((img) => (
          <div key={img.id} className="tarjeta-galeria">
            <img src={img.url} alt="Identity V Wallpaper" />
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