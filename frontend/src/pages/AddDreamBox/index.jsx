import { NavBar } from "../../components/NavBar"
import { Button } from "../../components/Button"
import { TextInput } from "../../components/TextInput";
import "./styles.css"
import jwt from 'jwt-decode';
import axios from 'axios';
import { useState } from "react"

 export function AddDreamBox() {
    const userData = JSON.parse(localStorage.getItem("wisewallet"));
    const decode = jwt(userData.token);

    const [data, setData] = useState({
        userId: decode.id,
        name: "",
        current: 0,
        goal: 0,
        isActive: true
    })

    const save = async (ev) => {
        try {
            ev.preventDefault();
            await axios.post("http://localhost:3001/dreambox", data);
            alert("Caixinha criada com sucesso!")
        } catch (e) {
            alert("Ocorreu um erro! Tente novamente!")
        }
    }

    return(
        <div className="add-dreambox-box">
            <NavBar/>
            <div className="add-dreambox-form">
                <div className="add-dreambox-title">
                    <span>Adicionar uma nova caixinha</span>
                </div>
                <div className="add-dreambox-text">
                    <form onSubmit={save}>
                        <label>Nome</label>
                        <TextInput value={data.name} onChange={ev => setData({...data, name: ev.target.value})}/>
                        <label>Objetivo</label>
                        <TextInput type={"number"} value={data.goal} onChange={ev => setData({...data, goal: parseFloat(ev.target.value)})}/>
                        <Button type={'submit'} text={"Salvar"}></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}