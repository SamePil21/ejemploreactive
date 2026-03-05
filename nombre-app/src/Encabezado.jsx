import miImagen from './assets/imgcardssampil/idvlogo.png';
import './encabezado.css';
import PropTypes from 'prop-types';
import Clima from './clima';
import { useAuth } from './AuthContext';

function Encabezado({ cambiarVista }) {
    return (
        <div className='encabezadoDiv'>
            <Logotipo />
            <Menu cambiarVista={cambiarVista} />
            <Login cambiarVista={cambiarVista} />
        </div>
    )
}

function Logotipo() {
    return (
        <div className='logoDiv'>
            <img src={miImagen} alt='Logotipo' />
        </div>
    )
}

function Menu({ cambiarVista }) {
    const {isLoggedIn} = useAuth;
    return (
        <div className='menuDiv'>
            <ul>
                <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
                <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
                <li onClick={() => cambiarVista("Productos")}>Productos</li>
                <li onClick={() => cambiarVista("Galeria")}>Galeria</li>
                <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
                <li onClick={() => cambiarVista("Contacto")}>Contacto</li>
                {isLoggedIn ? (
                 <>
              <li onClick={() => cambiarVista("Usuarios")}>Usuarios</li>
               <li onClick={() => cambiarVista("Carrito")}>Carrito</li>
               <li>Cerrar Sesión</li>
                 </>
                ) : (
                <li onClick={() => cambiarVista("Login")}>Login</li>
                )}  
                 </ul>
           </div>
    )
}

function Login({ cambiarVista }) {
    return (
        <div className='LoguinDiv'>
            <ul>
                <li onClick={() => cambiarVista("Login")}>Login</li>
            </ul>
            <Clima />
        </div>
    )
}

Menu.propTypes = {
  cambiarVista: PropTypes.func.isRequired
};

Login.propTypes = {
  cambiarVista: PropTypes.func.isRequired
};

Encabezado.propTypes = {
  cambiarVista: PropTypes.func.isRequired
};

export default Encabezado;