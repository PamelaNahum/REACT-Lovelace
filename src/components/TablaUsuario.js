import React, { useEffect } from "react";
import BotonFormulario from "./BotonFormulario";

const TablaUsuarios = ({ usuarios, deleteUser, setUsuarioEditado }) => {
    
  return (
    <div class="card container mb-2">
      <h2>Tabla Usuarios</h2>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* //Iteramos usuarios con .map, a cada 
                        elemento de usuarios lo llamaremos usuario y 
                            realizaremos lo siguiente => */}
          {usuarios.map((usuario) => (
            <tr>
              <td>{usuario.id}</td>
              <td>{usuario.name}</td>
              <td>{usuario.lastName}</td>
              <td>{usuario.correo}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteUser(usuario.id);
                  }}
                >
                 Eliminar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuarioEditado(usuario)
                  }}
                >
                 Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuarios;
