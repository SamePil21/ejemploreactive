import miImagen from './assets/logo.jpg';
import './encabezado.css';
import PropTypes from 'prop-types';
import Clima from './clima';

function Encabezado({cambiarVista}){
    return (
        <div className='encabezadoDiv'>
            <Logotipo />
            <Menu cambiarVista={cambiarVista}/>
            <Redes />
        </div>
    )
}

function Logotipo(){
    return (
        <div className='logoDiv'>
            <img src={miImagen} alt='Logotipo'/>
        </div>
    )
}

function Menu({cambiarVista}){
    return (
        <div className='menuDiv'>
            <ul>
                <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
                <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
                <li onClick={() => cambiarVista("Usuarios")}>Usuarios</li>
                <li onClick={() => cambiarVista("Productos")}>Productos</li>
                <li onClick={() => cambiarVista("Galeria")}>Galeria</li>
                <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
                <li onClick={() => cambiarVista("Contacto")}>Contacto</li>
            </ul>
        </div>
    )
}

function Redes(){
    return (
        <div className='redesDiv'>
            <ul>
           
            </ul>
            <Clima/>
        </div>
    )
}
Menu.propTypes = {
  cambiarVista: PropTypes.func.isRequired
};

Encabezado.propTypes = {
  cambiarVista: PropTypes.func.isRequired
};

export default Encabezado;