import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Private } from "./Private"
import { Logged } from "./Logged"
import { Transactions } from "../pages/Transactions"
import { AddTransaction } from "../pages/AddTransaction"

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Private Component={Home}/>}/>
                <Route path="/login" element={<Logged Component={Login}/>}/>
                <Route path="/signup" element={<Logged Component={Register}/>}/>
                <Route path="/transactions" element={<Private Component={Transactions}/>}/>
                <Route path="/add-transaction" element={<Private Component={AddTransaction}/>}/>
            </Routes>
        </BrowserRouter>
    )
}
