import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from ".";
import { Navbar } from "../components/Navbar";
import { GestaoTi } from "../pages/GestaoTI";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/Home" element={<PrivateRoutes />} >
                    <Route path="/Home" element={<Home />} />
                </Route>

                <Route path="/GestaoDeTi" element={<GestaoTi />} />
            </Routes>
        </BrowserRouter>
    )
}