import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Private } from "./private"

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Private Component={Home}/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}