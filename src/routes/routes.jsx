import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from ".";
import { Entrevista } from "../pages/Entrevista";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";


export function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/Home" element={<PrivateRoutes />} >
                    <Route path="/Home" element={<Home />} />
                    
                </Route>

                <Route path="/Entrevista" element={<Entrevista />} >
                    <Route path="/Entrevista" element={<Entrevista />} />
                </Route>

                
            </Routes>
        </BrowserRouter>
    )
}