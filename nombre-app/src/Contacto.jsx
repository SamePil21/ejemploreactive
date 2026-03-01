import { useState } from 'react';
import './Contacto.css'; 

function Contacto() {
    return (
        <div className='contacto-seccion'>
            <div className='contacto-header'>
                <h1>Portal de Contacto</h1>
            </div>
            <ContC />
        </div>
    );
}

function ContC() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.nombre || !formData.correo || !formData.mensaje) {
            alert('¡Por favor completa todos los campos!');
            return;
        }

        console.log("Datos enviados:", formData);
        setEnviado(true);

        // Limpiar formulario
        setFormData({ nombre: '', correo: '', mensaje: '' });

        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => setEnviado(false), 5000);
    };

    return (
        <div className='contacto-container'>
            {/* --- SECCIÓN DEL FORMULARIO MODERNIZADA --- */}
            <section className="seccion-formulario">
                <h2>¿Tienes dudas? Escríbenos</h2>
                <p className='pc'>informashion@winventado.com | Tel: +52 764 123 45 67</p>

                <form className='formulario' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre completo"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="correo"
                        placeholder="Tu correo electrónico"
                        value={formData.correo}
                        onChange={handleChange}
                    />
                    <textarea
                        name="mensaje"
                        placeholder="¿En qué podemos ayudarte? Describe tu duda aquí..."
                        rows="5"
                        value={formData.mensaje}
                        onChange={handleChange}
                    />
                    <button type="submit" className="btn-enviar">Enviar Mensaje</button>
                </form>

                {enviado && (
                    <p className="mensaje-exito">
                        ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto. 
                    </p>
                )}
            </section>
        </div>
    );
}

export default Contacto;