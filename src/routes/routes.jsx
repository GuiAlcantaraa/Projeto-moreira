import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from ".";
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

            </Routes>
        </BrowserRouter>
    )
}