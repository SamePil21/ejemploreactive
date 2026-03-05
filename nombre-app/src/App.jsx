import { useState } from "react";
import Encabezado from "./Encabezado";
import Futer from "./futer";
import PromosContenedor from "./boddy";
import Cards from "./Cardscode";
import { AuthProvider } from "./AuthContext";

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div>
       <AuthProvider>
         <Encabezado cambiarVista={setVista} />
        <Cards vista={vista} /> 
       </AuthProvider>
        <PromosContenedor />
        <Futer />
    </div>
  );
}
export default App;