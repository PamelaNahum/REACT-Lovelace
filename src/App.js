import React from "react";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";

const App = () => {
    return (
        //Desde el navegador
        <BrowserRouter>
            {/* Tendremos distintas rutas */}
            <Routes>
                {/* Especificamos cada ruta */}
                <Route path="/" element={<HomePage />} />
=======
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from "./pages";

const App =()=>{
    return(
        //desde el navegador 
        <BrowserRouter>
        {/* Vamos a tener distintas rutas */}
            <Routes>
                {/* Expecificamos cada ruta */}
                <Route path="/" element={<HomePage/>}/>
>>>>>>> 982dcb7247a68b16a3d9678d0b3ab821df1aeb9f
            </Routes>
        </BrowserRouter>
    )
}
<<<<<<< HEAD

export default App;
=======

export default App;


>>>>>>> 982dcb7247a68b16a3d9678d0b3ab821df1aeb9f
