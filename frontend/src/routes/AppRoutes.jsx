import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Private } from "./Private"
import { Logged } from "./Logged"
import { Transactions } from "../pages/Transactions"
import { AddTransaction } from "../pages/AddTransaction"
import { Bills } from "../pages/Bills"
import { AddBill } from "../pages/AddBill"
import { Planning } from "../pages/Planning"
import { AddDreamBox } from "../pages/AddDreamBox"
import { AddValueDreamBox } from "../pages/AddValueDreamBox"
import { CurrencyConverter } from "../pages/CurrencyConverter"
import { AddPlan } from "../pages/AddPlan"
import { AddValuePlan } from "../pages/AddValuePlan"
import { UpdateTransaction } from "../pages/UpdateTransaction"

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Private Component={Home}/>}/>
                <Route path="/login" element={<Logged Component={Login}/>}/>
                <Route path="/signup" element={<Logged Component={Register}/>}/>
                <Route path="/transactions" element={<Private Component={Transactions}/>}/>
                <Route path="/add-transaction" element={<Private Component={AddTransaction}/>}/>
                <Route path="/bills" element={<Private Component={Bills}/>}/>
                <Route path="/add-bill" element={<Private Component={AddBill}/>}/>
                <Route path="/planning" element={<Private Component={Planning}/>}/>
                <Route path="/add-dreambox" element={<Private Component={AddDreamBox}/>}/>
                <Route path="/add-value-dreambox" element={<Private Component={AddValueDreamBox}/>}/>
                <Route path="/currency-converter" element={<Private Component={CurrencyConverter}/>}/>
                <Route path="/add-plan" element={<Private Component={AddPlan}/>}/>
                <Route path="/add-value-plan" element={<Private Component={AddValuePlan}/>}/>
                <Route path="/update-transaction" element={<Private Component={UpdateTransaction}/>}/>
            </Routes>
        </BrowserRouter>
    )
}
