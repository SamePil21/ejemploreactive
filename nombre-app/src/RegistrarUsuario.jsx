import React, { useState } from "react";
import api from "./Services/api";
import './RegistrarUsuario.css';

function RegistrarUsuario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users", { name, email, password });
      alert("Usuario registrado exitosamente");
      setName(""); setEmail(""); setPassword("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="registrar-container">
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleSubmit} className="registrar-form">
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="btn-registrar">Registrar Usuario</button>
      </form>
    </div>
  );
}

export default RegistrarUsuario;