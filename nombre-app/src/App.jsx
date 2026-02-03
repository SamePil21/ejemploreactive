import Cards from "./cards";
import Encabezado from "./enabesado";
import Futer from "./futer";
import Boddy from "./boddy";

function App(){
  return(
    <div>
      <Encabezado /> 
      <Cards/>
      <Boddy name = ''/>
      <Futer/>
    </div>
  )

}
export default App