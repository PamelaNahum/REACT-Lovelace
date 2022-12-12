import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {  FormularioUsuario, TablaUsuarios, BotonFormulario } from "../components";

const HomePage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Auto", {}, [navigate]))
    return (
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <FormularioUsuario />
                </div>
            </div>
            <BotonFormulario infoBoton={'Ir a autos'} handleOnClick={handleOnClick}/>
            <hr />
            <div class="row">
                <div class="col">
                    <TablaUsuarios />
                </div>
            </div>
        </div>
    )
}

export default HomePage;