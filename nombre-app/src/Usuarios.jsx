import './Usuarios.css';
import React, { useState, useEffect } from "react";
import api from './Services/api';
import RegistrarUsuario from './RegistrarUsuario';

function Usuarios(){
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                const response = await api.get("/users");
                setUsuarios(response.data);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };
        obtenerUsuarios();
    }, []);

    if (loading) return <p>Cargando...</p>;

    return (
        <div>
            <header className='usuarios-header'>
                <h1>Usuarios</h1>
            </header>

            <RegistrarUsuario />

            <main className='usuarios-container'>
                {usuarios.length === 0 ? (
                    <p>No hay usuarios</p>
                ) : (
                    <table className='tUsuarios'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map(usuario => (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.username}</td>
                                    <td>{usuario.email}</td>
                                   <td>{usuario.password || '-'}</td>
                                    <td>
                                        <button className='btn-editar'>✏️Editar✏️</button>
                                        <button className='btn-eliminar' onClick={(removeUsuario)}>🗑️Eliminar🗑️</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
        </div>
    );

}


    const removeUsuario = async (usuarioId) =>{
        try{
            const response = await api.delete(
                '/users/${usuarioId}'
            );

            console.log(response.data);
            alert('¡Usuario Eliminado con exito!');

        }catch (error){
            console.error(error);

        }
        }




export default Usuarios;