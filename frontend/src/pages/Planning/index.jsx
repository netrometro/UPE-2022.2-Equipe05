import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import "./styles.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import jwt from 'jwt-decode';
import axios from 'axios';
import { useEffect, useState } from 'react'

export function Planning() {
    const data = JSON.parse(localStorage.getItem("wisewallet"));
    const decode = jwt(data.token)

    const navigate = useNavigate();

    const getDreamBox = async () => {
        const dreambox = await axios.get(`http://localhost:3001/dreamboxes/${decode.id}`, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          }
        });
        console.log(dreambox.data)
        setDreambox(dreambox.data);
    }

    const [dreambox, setDreambox] = useState({});

    useEffect(() => {
        getDreamBox();
    }, [])

    return(
        <div className="planning">
            <NavBar/>
            <div className="dreambox-box">
                <span className="dreambox-title">Planejamento</span>
                <div className="dreambox">
                    {
                        dreambox?.length ? dreambox.map((data, index) =>
                            <div className="dreambox-card" key={index}>
                                <span className="dreambox-card-title">{data.name}:&ensp;</span>
                                <span>R${data.current}</span>
                                <span>R${data.goal}</span>
                                <button onClick={() => navigate("/add-value-dreambox", {state: {id: data.id}})}>Adicionar</button>

                            </div>
                        ) : <span>Nenhuma caixinha cadastrada...</span>
                    }
                </div>
            </div>
        </div>
    )
}