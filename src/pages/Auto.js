import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Switch from '@mui/material/Switch';
import { blue } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';
import { BotonFormulario, FormularioAuto, TablaAutos } from "../components";

const AutoPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/", {}, [navigate]))
    
    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: blue[600],
          '&:hover': {
            backgroundColor: alpha(blue[600], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: blue[600],
        },
      }));
  
      const label = { inputProps: { 'aria-label': 'Color switch demo' } };
  return (
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <FormularioAuto />
          <Switch {...label} defaultChecked color="default" />
          <GreenSwitch {...label} defaultChecked />
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
