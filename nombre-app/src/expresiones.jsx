import { use } from "react";

function Expresiones(){
    const nombre ='Carlos Samuel';
    const apellidos ='Vargas Diego';
    return (
        <div>
            <h2>Expresiones</h2>
            <h3> Tu nombre es: {nombre} y tus apellidos son: {apellidos}</h3>
            <Lista />
        </div>
    )
}
function Lista(){
    const user = [
        {id:1, name: 'Yukinagato', role: 'Web Developer'},
        {id:2, name: 'Maomao', role: 'Web Developer'},
        {id:3, name: 'SakuraKN', role: 'Team Leader'},
    ]
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                    <th>Nombre</th>
                    <th>Role</th>
                    </tr>
                        {
                            user.map(function(user, index){
                                return(
                                    <tr key={index}>
                                     <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    </tr>
                                )
                            })
                        }
                    
                </tbody>
            </table>
        </div>
    )
}

export default Expresiones 