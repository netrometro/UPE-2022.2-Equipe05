import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import jwt from 'jwt-decode';
import axios from 'axios';
import { useEffect, useState } from 'react'

export function AddValuePlan() {
    const location = useLocation();
    const navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem("wisewallet"));
    const decode = jwt(userData.token);
    const planId = location?.state?.id

    const getPlanById = async () => {
        try {
            const plan = await axios.get(`http://localhost:3001/plan/${planId}`, {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            }
            });
            setPlanById(plan.data)
        } catch (e) {
            console.log(e)
        }
    }

    const [planById, setPlanById] = useState({});

    const [data, setData] = useState({
        userId: decode.id,
        name: planById.name,
        current: planById.current,
        goal: planById.goal,
        isActive: planById.isActive
    })

    const updatePlan = async (ev) => {
        try {
            ev.preventDefault();
            await axios.put(`http://localhost:3001/plan/${location?.state?.id}`, data, {
                headers: {
                    Authorization: `Bearer ${userData.token}`,
                }
            })
            alert("Valor adicionado com sucesso");
            navigate("/planning")
        } catch (e) {
            ev.preventDefault();
            alert("Ocorreu um erro! Tente novamente mais tarde.")
        }
    }

    useEffect(() => {
        getPlanById();
    },[]);

    return(
        <div className="add-value-dreambox-box">
            <NavBar/>
            <div className="add-value-dreambox-form">
                <div className="add-value-dreambox-title">
                    <span>Adicione um valor ao planejamento&nbsp;</span>
                    <span className="add-value-dreambox-name">{planById.name}</span>
                </div>
                <form onSubmit={updatePlan}>

                    <label>Valor a ser adicionado</label>
                    <TextInput type={"number"} value={data.value} onChange={
                      ev => setData({...data, current: parseFloat(ev.target.value)  + planById.current})}/>

                    <Button text={"Adicionar"} type="submit"/>
                </form>
            </div>
        </div>
    )
}
