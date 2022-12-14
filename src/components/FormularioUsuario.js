import React, { useState, useEffect } from "react";
import BotonFormulario from "./BotonFormulario";

const initialUsuario = {
  nombre: "",
  apellido: "",
  correo: "",
  rut: "",
};

const FormularioUsuario = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
  const [usuario, setUsuario] = useState(initialUsuario);
  const { nombre, apellido, correo, rut } = usuario;
  //el hook useEffect siempre esta pendiente de si la variable que tiene dentro de
  //sus corchetes cambia el deberá hacer todo loq ue tiene en su funcion dentro
  //CONSIDERACIÓN es que useEffect siempre corre al menos 1 vez cuando la página carga por primera vez
  useEffect(() => {
    if (usuarioEditado !== null) {
      setUsuario(usuarioEditado);
    } else {
      setUsuario({
        nombre: "",
        apellido: "",
        correo: "",
        rut: "",
      });
    }
  }, [usuarioEditado]);

  const handleInputChange = (e) => {
    //esta funcion se llama cada vez que nostros escribirmos algo en algun input de
    //nuestra página
    const changedFormValue = {
      //va a antaner los datos que tiene usuario de los input que no he tocado
      //pero va a aactualizar el atributo que cambié por su nuevo valor
      ...usuario,
      [e.target.name]: e.target.value,
    };
    //finalmente los cambios deberán verse reflejados en neustro hook
    setUsuario(changedFormValue);
  };

  return (
    <div class="card container mb-2">
      <form>
        {/* hacemos que el mensaje del formulario sea dinamico
    segun si queremos editar o ingresar */}
        {usuarioEditado !== null ? (
          <h1>Editar Usuario</h1>
        ) : (
          <h1>Ingrese Usuario</h1>
        )}

        <div class="mb-3">
          <label class="form-label" for="id">
            Rut
          </label>
          <input
            class="form-control"
            placeholder="11111111-1"
            type="text"
            id="id"
            //para que mi formulario sea capaz de crear un usuario debemos agregarle a los inpur
            //lo siguente
            name="rut"
            value={rut}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label" for="id">
            Nombre
          </label>
          <input
            class="form-control"
            placeholder="Juan"
            type="text"
            id="Nombre"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label" for="id">
            Apellido
          </label>
          <input
            class="form-control"
            placeholder="Perez"
            type="text"
            id="Apellido"
            name="apellido"
            value={apellido}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label" for="id">
            Correo
          </label>
          <input
            class="form-control"
            placeholder="juanperez@correo.cl"
            type="email"
            id="Correo"
            name="correo"
            value={correo}
            onChange={handleInputChange}
          />
        </div>
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userEdit(usuario)}
          >
            Editar usuario
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(usuario)}
          >
            Ingresar usuario
          </button>
        )}

        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}

        <br />
      </form>
    </div>
  );
};

export default FormularioUsuario;
