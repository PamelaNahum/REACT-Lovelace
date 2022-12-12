import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoPage, HomePage } from "./pages";

const App = () => {
    return (
        //Desde el navegador
        <BrowserRouter>
            {/* Tendremos distintas rutas */}
            <Routes>
                {/* Especificamos cada ruta */}
                <Route path="/" element={<HomePage />} />
                <Route path="/Auto" element={<AutoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
