import "./Login.css";
import { useState } from "react";

function Login() {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const manejarLogin = (e) => {
    e.preventDefault();

    if(usuario === "admin" && password === "1234"){
      alert("Login correcto ");
    }else{
      alert("Usuario o contraseña incorrectos ");
    }
  };
  
  return (
    
    <div className="login-container">
        

      <h2>Iniciar Sesión</h2>

      <form onSubmit={manejarLogin}>
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
  );
}

export default Login;