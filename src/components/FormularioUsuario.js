import React, { useState } from "react";
import BotonFormulario from "./BotonFormulario";

const initialUsuario = {
  nombre: "",
  apellido: "",
  correo: "",
  rut: "",
};

const FormularioUsuario = ({ userAdd }) => {
  const [usuario, setUsuario] = useState(initialUsuario);
  const { nombre, apellido, correo, rut } = usuario;

    const handleInputChange =(e)=>{
        //esta funcion se llama cada vez que nostros escribirmos algo en algun input de 
        //nuestra página
        const changedFormValue = {
            //va a antaner los datos que tiene usuario de los input que no he tocado
            //pero va a aactualizar el atributo que cambié por su nuevo valor
            ...usuario,
            [e.target.name]:e.target.value
        }
        //finalmente los cambios deberán verse reflejados en neustro hook
        setUsuario(changedFormValue);
    }

  return (
    <div class="card container mb-2">
      <form>
        <h1>Ingrese Usuario</h1>
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
        <button 
        type="button"
        class="btn btn-success"
        onClick={()=>
        userAdd(usuario)
        }
        >
            Ingresar usuario
        </button>
        <br />
      </form>
    </div>
  );
};

export default FormularioUsuario;
