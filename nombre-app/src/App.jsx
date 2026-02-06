import Cards from "./cards";
import Encabezado from "./enabesado";
import Futer from "./futer";
import Boddy from "./boddy";
import { useState } from "react";

function App() {
    const [vista, setVista] = useState("Inicio");

    return (
        <div>
            <Encabezado cambiarVista={setVista} />
            <Cards vista={vista} />
            <Boddy name="" />
            <Futer />
        </div>
    );
}

export default App;
