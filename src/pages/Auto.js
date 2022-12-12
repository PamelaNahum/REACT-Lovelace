import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BotonFormulario, FormularioAuto, TablaAutos } from "../components";

const AutoPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/", {}, [navigate]))
  return (
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <FormularioAuto />
        </div>
      </div>
      <BotonFormulario infoBoton={"Ir a Usuario"} handleOnClick={handleOnClick}/>
      <hr />
      <div class="row">
        <div class="col">
          <TablaAutos />
        </div>
      </div>
    </div>
  );
};

export default AutoPage;
