import Mapa from './mapa';
import './boddysame.css';

function PromosContenedor() {
  return (
    <div className='PromoContenedor'>
      <h2>Hola bienvenido a nuestro sitio</h2>
      <p>Ofertas en todos los productos</p>

      <Mapa 
        lat={20.268136}
        lng={-97.960834}
        nombre="ServiTec Sucursal Centro"
      />
    </div>
  );
}

export default PromosContenedor;
