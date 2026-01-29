import miImagen from './assets/logo.jpg';
import logofaceboock from './assets/faceboock.png';
import logogoogle from './assets/Google.png';
import logoinstagram from './assets/Instagram.png';
import'./styles.css';


function Encabezado(){
    return (
        <div className='encabezadoe'>
            <Logotipo />
            <Menu />
            <Redes />
        </div>
    )
}
function Logotipo(){
    return (
        <div className='logotipo'>
            <img src={miImagen} alt='Logotipo' />
        </div>
    )
}
function Menu(){
    return (
        <div className='Menurs'>
            <ul>
                <li>Inicio</li>
                <li>Acerca de </li>
                <li>Producto</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </div>
    )
}
function Redes(){
    return(
        <div className='redesmn'>
            <ul>
                <li><img src={logofaceboock} alt='faceboock' /> </li>
                 <li><img src={logogoogle} alt='Google' /> </li>
                  <li><img src={logoinstagram} alt='Instagram' /> </li>
            </ul>
        </div>
    )
}

export default Encabezado