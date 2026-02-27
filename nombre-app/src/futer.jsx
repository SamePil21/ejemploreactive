import './futer.css';

function Futer() {
  return (
    <footer className="footer">
      <div className="footer-contenedor">
        <div className="footer-seccion">
          <h3>Miku Epsilon</h3>
          <p>Innovación y tecnología al alcance de tus manos. Encuentra los mejores productos y soluciones para tu día a día.</p>
        </div>
        <div className="footer-seccion">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li>Política de Privacidad</li>
            <li>Términos y Condiciones</li>
            <li>Preguntas Frecuentes</li>
            <li>Soporte Técnico</li>
          </ul>
        </div>
        <div className="footer-seccion">
          <h3>Contacto Directo</h3>
          <p>Email: contacto@mikuepsilon.com</p>
          <p>Teléfono: +52 764 100 55 68</p>
          <p>Ubicación: Xicotepec de Juárez, Puebla</p>
        </div>
      </div>
      <div className="footer-inferior">
        <p>&copy; 2026 Miku Epsilon. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Futer;