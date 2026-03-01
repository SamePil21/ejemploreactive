import { useState } from "react";
import Encabezado from "./Encabezado";
import Futer from "./futer";
import PromosContenedor from "./boddy";
import MapaGeoLocalizacion from "./mapalocalizacion";
import Cards from "./Cardscode";

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div>
        <Encabezado cambiarVista={setVista} />
        <Cards vista={vista} /> 
        <PromosContenedor />
        <Futer />
    </div>
  );
}
export default App;