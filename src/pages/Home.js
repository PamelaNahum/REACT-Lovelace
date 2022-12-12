<<<<<<< HEAD
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React from "react";
import { TableComponent, TextComponent, FormularioAuto, FormularioUsuario, TablaAutos, TablaUsuarios } from "../components";

const HomePage = () => {
    return (
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <FormularioAuto />
                </div>
                <div class="col">
                    <FormularioUsuario />
                </div>
            </div>
            <hr />
            <div class="row">
                <div class="col">
                    <TablaAutos />
                </div>
                <div class="col">
                    <TablaUsuarios />
                </div>
            </div>
        </div>
=======
import React from "react";
import { TableComponent, TextComponent } from "../components";

const HomePage = () => {
    return(
        <div>
            <TextComponent/>
            <TableComponent/>
        </div>

>>>>>>> 982dcb7247a68b16a3d9678d0b3ab821df1aeb9f
    )
}

export default HomePage;