import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import jwt from 'jwt-decode';
import axios from 'axios';
import { useEffect, useState } from 'react'

export function AddValueDreamBox() {
    const location = useLocation();
    const navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem("wisewallet"));
    const decode = jwt(userData.token);
    const dreamBoxId = location?.state?.id

    const getDreamBoxById = async () => {
        try {
            const dreamBox = await axios.get(`http://localhost:3001/dreambox/${dreamBoxId}`, {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            }
            });
            setDreamBoxById(dreamBox.data)
        } catch (e) {
            console.log(e)
        }
    }

    const [dreamBoxById, setDreamBoxById] = useState({});

    const [data, setData] = useState({
        userId: decode.id,
        name: dreamBoxById.name,
        current: dreamBoxById.current,
        goal: dreamBoxById.goal,
        isActive: dreamBoxById.isActive
    })

    const updateDreamBox = async (ev) => {
        try {
            ev.preventDefault();
            await axios.put(`http://localhost:3001/dreambox/${location?.state?.id}`, data, {
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
        getDreamBoxById();
    },[]);

    return(
        <div className="add-value-dreambox-box">
            <NavBar/>
            <div className="add-value-dreambox-form">
                <div className="add-value-dreambox-title">
                    <span>Adicione um valor a caixinha&nbsp;</span>
                    <span className="add-value-dreambox-name">{dreamBoxById.name}</span>
                </div>
                <form onSubmit={updateDreamBox}>
                    <label>Valor a ser adicionado</label>
                    <TextInput type={"number"} value={data.value} onChange={ev => setData({...data, current: parseFloat(ev.target.value)  + dreamBoxById.current})}/>
                    <Button text={"Adicionar"} type="submit"/>
                </form>
            </div>
        </div>
    )
}