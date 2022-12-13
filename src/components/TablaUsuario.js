import React from "react";

const TablaUsuarios = ({usuarios}) => {
    return (
        <div class="card container mb-2">
            <h2>Tabla Usuarios</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            Rut
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Apellido
                        </th>
                        <th>
                            Correo
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                {/* //Iteramos usuarios con .map, a cada 
                        elemento de usuarios lo llamaremos usuario y 
                            realizaremos lo siguiente => */}
                    {usuarios.map(usuario=>(
                        <tr>
                        <td>
                            {usuario.rut}
                        </td>
                        <td>
                            {usuario.nombre}
                        </td>
                        <td>
                            {usuario.apellido}
                        </td>
                        <td>
                            {usuario.correo}
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default TablaUsuarios;