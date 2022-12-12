import React from "react";
//componente dinámico
const BotonFormulario = ({infoBoton, handleOnClick}) => {
    return (
        <div>
        <button 
        type="button" 
        class="btn btn-primary"
        onClick={()=>{
            handleOnClick();
        }}
        >{infoBoton}</button>
        </div>
    )
}

export default BotonFormulario;