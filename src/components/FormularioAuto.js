import React from "react";
import BotonFormulario from "./BotonFormulario";

const FormularioAuto = () => {
    return (
        <div class="card container mb-5" >
            <form>
                <h1>Ingrese Auto</h1>
                <div class="mb-3" >
                    <label class="form-label" for="id">ID</label>
                    <input class="form-control" type="text" id="id" placeholder="0001" />
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="MarcaAuto">Marca del Auto</label>
                    <input class="form-control" type="text" id="MarcaAuto" placeholder="Nissan"/>
                </div>
                <div class="mb-3" >
                    <label class="form-label" for="ModeloAuto">Modelo</label>
                    <input class="form-control" type="text" id="ModeloAuto" placeholder="Versa" />
                </div>
                <div class="mb-3">
                    <label class="form-label" for="ColorAuto">Selecione Color</label>
                    <select id="ColorAuto" class="form-select" aria-label="Default select example">
                        <option selected>Color</option>
                        <option value="Azul" class="text-azul">Azul</option>
                        <option value="Verde" class="text-secondary">Verde</option>
                        <option value="Rojo" class="text-danger">Rojo</option>
                        <option value="Gris" class="text-white-50">Gris</option>
                        <option value="Blanco" class="text-white">Blanco</option>
                    </select>
                </div>
                <BotonFormulario/>
                <br/>
            </form>
            
        </div>
    )
}

export default FormularioAuto;