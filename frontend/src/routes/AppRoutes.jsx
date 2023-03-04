import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Private } from "./Private"
import { Logged } from "./Logged"

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Private Component={Home}/>}/>
                <Route path="/login" element={<Logged Component={Login}/>}/>
                <Route path="/signup" element={<Logged Component={Register}/>}/>
            </Routes>
        </BrowserRouter>
    )
}