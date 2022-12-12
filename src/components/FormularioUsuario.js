import React from "react";
import BotonFormulario from "./BotonFormulario";

const FormularioUsuario = () => {
    return (
        <div class="card container mb-2">
            <form>
                <h1>Ingrese Usuario</h1>
                <div class="mb-3" >
                    <label class="form-label" for="id">Rut</label>
                    <input class="form-control" placeholder="11111111-1" type="text" id="id" />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Nombre</label>
                    <input class="form-control" placeholder="Juan" type="text" id="Nombre" />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Apellido</label>
                    <input class="form-control" placeholder="Perez" type="text" id="Apellido" />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="id">Correo</label>
                    <input class="form-control" placeholder="juanperez@correo.cl" type="email" id="Correo" />
                </div>
                <BotonFormulario />
                <br />
            </form>
        </div>
    )
}

export default FormularioUsuario;