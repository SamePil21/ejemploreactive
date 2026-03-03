import React, { useState,useEffect } from "react";
import axios from 'axios';
import api from "./Services/api";
import './RegistrarUsuario.css';

function RegistrarUsuario({usuarioEditando, limpiarSeleccion, onActualizacionExitosa}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(usuarioEditando){
      setName(usuarioEditando.username);
      setEmail(usuarioEditando.email);
      setPassword('');
    }else{
      resetForm();
    }
  },[usuarioEditando]);
  const resetForm=() => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoUsuario = {name, email, password};
    try {
      if(usuarioEditando){
        const respuesta = await api.post(`/users/${usuarioEditando.id}`, nuevoUsuario);
        console.log('Usuario Actualizado:', respuesta.data);
      alert("Usuario actualizado exitosamente");
     limpiarSeleccion();
      }else{
        const respuesta = await api.post('/users', nuevoUsuario);
        console-log('Usuario registrado:', respuesta.data);
        alert('Usuarios guardado corectamente');
      }

      resetForm();
      if(onActualizacionExitosa) onActualizacionExitosa();
    } catch (error) {
      console.error("Error:", error);
      alert('¡Error al procesar la solicitud');
    }

  };

  return (
    <div className="registrar-container">
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleSubmit} className="registrar-form">
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="btn-registrar">Registrar Usuario</button>
      </form>
    </div>
  );
}

export default RegistrarUsuario;