import './cards.css';
import PropTypes from 'prop-types';
import imgCard1 from './assets/imgcardssampil/123dcasrdidv.jpg';
import imgCard2 from './assets/imgcardssampil/cardivdglden.webp';
import imgCard3 from './assets/imgcardssampil/bb.webp';

// 1. IMPORTANTE: Debes importar o definir estos componentes para que no den error
const Inicio = () => <div>Contenido de Inicio</div>;
const AcercaDe = () => <div>Sobre Nosotros</div>;
const Productos = () => <div>Nuestros Productos</div>;
const Galeria = () => <div>Galería de Fotos</div>;
const Sucursales = () => <div>Nuestras Sucursales</div>;
const Contacto = () => <div>Formulario de Contacto</div>;

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
            {/* Aquí se renderiza la vista actual o las Cards por defecto */}
            {vista === "Inicio" ? <Cards /> : (vistas[vista] || <Cards />)}
        </div>
    );
}

// 2. CORRECCIÓN DE NOMBRES: Cambié <Target /> por <TargetComponents />
// También corregí los nombres de las props para que coincidan con la función de abajo
function Cards() {
    return (
        <div className="cardsDiv">
            <TargetComponents titulo="1 diseños cards" descripcion="Card numero 1" image={imgCard1} />
            <TargetComponents titulo="Diseños card 2" descripcion="Card numero 2" image={imgCard2} />
            <TargetComponents titulo="Info complement 3" descripcion="Card numero 3" image={imgCard3} />
            <TargetComponents titulo="Info complement 4" descripcion="Card numero 4" image={imgCard2} />
        </div>
    );
}

function TargetComponents(props){
    return(
        <div className='TarjetaDiv'>
            <img src={props.image} alt='Logotipo'/>
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p> 
            <a href='#'>Ver más</a>
        </div>
    )
}

ContenedorCards.propTypes = {
    vista: PropTypes.string.isRequired
};

export default ContenedorCards;