import '/src/cardsst.css';
import PropTypes from 'prop-types';
import imgCard1 from './assets/imgcardssampil/123dcasrdidv.jpg';
import imgCard2 from './assets/imgcardssampil/cardivdglden.webp';
import imgCard3 from './assets/imgcardssampil/bb.webp';

function Target({ imagen, name, descripcion, saludarFunc }) {
    return (
        <div className="card">
            <img src={imagen} alt={name} />
            <h1>{name}</h1>
            <p>{descripcion}</p>
            <a href="#">Leer más</a>
            {saludarFunc && (
                <button onClick={saludarFunc}>Saludar</button>
            )}
        </div>
    );
}

Target.propTypes = {
    imagen: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    saludarFunc: PropTypes.func
};

function Cards() {
    return (
        <div className="cardsDiv">
            <Target name="1 diseños cards" descripcion="Card numero 1" imagen={imgCard1} />
            <Target name="Diseños card 2" descripcion="Card numero 2" imagen={imgCard2} />
            <Target name="Info complement 3" descripcion="Card numero 3" imagen={imgCard3} />
           <Target name="Info complement 4" descripcion="Card numero 4" imagen={imgCard2} />
        </div>
    );
}

function Inicio() { return <h2>Bienvenido a la página de Inicio</h2>; }
function AcercaDe() { return <h2>Acerca De Nosotros</h2>; }
function Productos() { return <h2>Lista de Productos</h2>; }
function Sucursales() { return <h2>Nuestras Sucursales</h2>; }
function Contacto() { return <h2>Formulario de Contacto</h2>; }

function Galeria() {
    return (
        <div>
            <h2>Nuestra Galería</h2>
            <Cards />
        </div>
    );
}

function ContenedorCards({ vista }) {
    const vistas = {
        Inicio: <Inicio />,
        AcercaDe: <AcercaDe />,
        Productos: <Productos />,
        Galeria: <Galeria />,
        Sucursales: <Sucursales />,
        Contacto: <Contacto />
    };

    return (
        <div className="main-container">
            {vistas[vista] || <Inicio />}
        </div>
    );
}

ContenedorCards.propTypes = {
    vista: PropTypes.string.isRequired
};

export default ContenedorCards;