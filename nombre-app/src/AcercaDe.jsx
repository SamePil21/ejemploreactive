import './AcercaDe.css';
// Si tienes la imagen en tu carpeta de proyecto, debes importarla así:
// import jaja from './assets/tu_imagen.jpg'; 

function AcercaDe() {
    return (
        <div className='AC'>
            <Contenedor />
        </div>
    );
}

function Contenedor() {
    // Si no tienes la imagen local, puedes usar un link directo temporal:
    const imagenUrl = "https://images.alphacoders.com/138/thumb-1920-1381416.jpg"; 

    return (
        <div className="acerca-container">
            <h1 className="head">Acerca de nosotros</h1>
            
            {/* Cambiamos el <p> exterior por un <div> para evitar errores de anidación */}
            <div className="text">
                <p>
                    Somos una pequeña comunidad dedicada a compartir información sobre el mundo del 
                    wrestling profesional y en general sobre las Luchitas Falsas.
                </p>
                
                {/* Usamos la variable definida arriba */}
                <img src={imagenUrl} alt="Imagen de la comunidad" className="img-acerca" />

                <p className="firma">Fan de Jey Uso</p>
            </div>
        </div>
    );
}

export default AcercaDe;