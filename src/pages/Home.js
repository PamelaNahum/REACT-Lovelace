import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormularioUsuario,
  TablaUsuarios,
  BotonFormulario,
} from "../components";

const usuario1 = [
  {
    nombre: "Joseph",
    apellido: "Joestar",
    correo: "jo.jo@gmail.com",
    rut: "9563214-8",
  },
  {
    nombre: "Josuke",
    apellido: "Higashikata",
    correo: "jojo@gmail.com",
    rut: "17456329-9",
  },
  {
    nombre: "Jotaro",
    apellido: "Joestar",
    correo: "jo.jo@gmail.com",
    rut: "9563214-8",
  },
];

const usuario2 = {
  nombre: "Josuke",
  apellido: "Higashikata",
  correo: "jojo@gmail.com",
  rut: "17456329-9",
};

const HomePage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]));
  return (
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <FormularioUsuario />
        </div>
      </div>
      <BotonFormulario infoBoton={"Ir a autos"} handleOnClick={handleOnClick} />
      <hr />
      <div class="row">
        <div class="col">
          <TablaUsuarios usuarios={usuario1} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
