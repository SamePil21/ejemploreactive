import Cards from "./cards";
import Encabezado from "./enabesado";
import Futer from "./futer";
import Boddy from "./boddy";
import { useState } from "react";
import MapaGeoLocalizacion from "./mapalocalizacion";

function App() {
    const [vista, setVista] = useState("Inicio");

    return (
        <div>
            <Encabezado cambiarVista={setVista} />
            <Cards vista={vista} />
            <Boddy name="" />
            <Futer />
            <MapaGeoLocalizacion />
        </div>
    );
}

export default App;
