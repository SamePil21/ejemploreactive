import './cards.css';
import PropTypes from 'prop-types';
import Inicio from "./Inicio";
import Sucursales from "./Sucursales";
import Usuarios from "./Usuarios";
import Galeria from "./Galeria";
import Productos from './Productos';
import AcercaDe from "./AcercaDe";
import Contacto from "./Contacto";


function ContenedorCards({ vista }) {
    const vistas = {
        Inicio: <Inicio />,
        AcercaDe: <AcercaDe />,
        Galeria: <Galeria />,
        Productos: <Productos />,
        Sucursales: <Sucursales />,
        Usuarios: <Usuarios/>,
        Contacto: <Contacto />,
    };

    return (
        <div>
            {vistas[vista] || <Inicio />}
        </div>
    );
}

ContenedorCards.propTypes = {
    vista: PropTypes.string.isRequired,
};

export default ContenedorCards;