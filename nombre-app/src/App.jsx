import { useState } from "react";
import Cards from "./cards";
import Encabezado from "./enabesado";
import Futer from "./futer";
import PromosContenedor from "./boddy";
import MapaGeoLocalizacion from "./mapalocalizacion";

function App() {
    const [vista, setVista] = useState("Inicio");

    return (
        <div>
            <Encabezado cambiarVista={setVista} />
            <Cards vista={vista} />
            <PromosContenedor />
            <MapaGeoLocalizacion />
            <Futer />
        </div>
    );
}

export default App;