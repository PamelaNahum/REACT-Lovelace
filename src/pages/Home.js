import React, { useCallback, useState } from "react";
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
    rut: "9563213-8",
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
  //en este momento state vale lo mismo que usuario 1
  //genera una funcion setteadora que me va a permitir cambiar los datos se usuario 1 sin afectarlo directamente(setState)
  const [user, setUser] = useState(usuario1);

  const userDelete =(rutUsuario)=>{
    //esta funcion filtra mi lista de usuarios
    const changeUser = user.filter(usuario => usuario.rut != rutUsuario);
    //al momento de ocupar la funcion setState, yo le voy a cambiar el valor TEMPORAL a mis usuarios
    setUser(changeUser);
  }

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
          <TablaUsuarios usuarios={user} deleteUser={userDelete} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
