import miImagen from './assets/logo.jpg';
import logofaceboock from './assets/faceboock.png';
import logogoogle from './assets/Google.png';
import logoinstagram from './assets/Instagram.png';
import './styles.css';
import PropTypes from 'prop-types';
import Clima from './clima';

function Encabezado({ cambiarVista }) {
    return (
        <div className='encabezadoe'>
            <Logotipo />
            <Menu cambiarVista={cambiarVista} />
            <Redes />
        </div>
    );
}

function Logotipo() {
    return (
        <div className='logotipo'>
            <img src={miImagen} alt='Logotipo' />
        </div>
    );
}

function Menu({ cambiarVista }) {
    return (
        <div className='Menurs'>
            <ul>
                <li onClick={() => cambiarVista('Inicio')}>Inicio</li>
                <li onClick={() => cambiarVista('AcercaDe')}>Acercade</li>
                <li onClick={() => cambiarVista('Productos')}>Producto</li>
                <li onClick={() => cambiarVista('Galeria')}>Galeria</li>
                <li onClick={() => cambiarVista('Contacto')}>Contacto</li>
                <li onClick={() => cambiarVista('Sucursales')}>Sucursales</li>
            </ul>
            
        </div>
    )
}

function Redes() {
    return (
        <div className='redesmn'>
            <ul>
                <li><img src={logofaceboock} alt='faceboock' /> </li>
                <li><img src={logogoogle} alt='Google' /> </li>
                <li><img src={logoinstagram} alt='Instagram' /> </li>
            </ul>
            <Clima/>
        </div>
    )
}

Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired
}

Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired
}

export default Encabezado;