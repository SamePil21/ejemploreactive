import React, {useState} from 'react';
import api from "./Services/Api";
import "./Login.css";
import { useAuth } from "./AuthContext";

const Login = () => {
  const { Login } = useAuth();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  const credenciales = { username: usuario, password };
    try{
      const respuesta = await api.post('/Login', credenciales);
      if( respuesta.data.token){
        Login(respuesta.data.token);
        alert('Autentificcacion autorizada');
      }else{
        alert('Credenciales invalidas');
      }
    }catch (error){
      alert('Error', error);
      console.error("Error:", error);
    }
  };
  
  return (
    
    <div className="login-container">
    <div className="login-card"></div> 
      <h2>Bienvenido</h2>
      <form onSubmit={handleSubmit}>
        className
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