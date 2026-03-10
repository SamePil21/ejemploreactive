import React, { useState } from "react";
import api from "./Services/Api";
import "./Login.css";
import { useAuth } from "./AuthContext";

const Login = () => {

  const { login } = useAuth();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credenciales = {
      username: usuario,
      password: password
    };

    try {
      const respuesta = await api.post("/auth/login", credenciales);

      if (respuesta.data.token) {
        login(respuesta.data.token);
        alert("Autenticación autorizada");
      } else {
        alert("Credenciales inválidas");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Bienvenido</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

      </div>
    </div>
  );
};

export default Login;