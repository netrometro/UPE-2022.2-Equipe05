import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import jwt from 'jwt-decode';
import axios from 'axios';
import { useEffect, useState } from 'react'

export function Planning() {
    const userData = JSON.parse(localStorage.getItem("wisewallet"));
    const decode = jwt(userData.token)

    const navigate = useNavigate();

    const getDreamBox = async () => {
        const dreambox = await axios.get(`http://localhost:3001/dreamboxes/${decode.id}`, {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          }
        });
        setDreambox(dreambox.data);
    }

    const data = {
        isActive: false
    }

    const updateDreamBox = async (id) => {
        try {
            console.log(typeof(id))
            await axios.put(`http://localhost:3001/dreambox/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${userData.token}`,
                }
            })
            alert("Caixinha finalizada!");
            getDreamBox();
        } catch (e) {
            alert("Ocorreu um erro, tente novamente mais tarde!")
        }
    }

    const deleteDreamBox = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/dreambox/${id}`, {
              headers: {
                Authorization: `Bearer ${userData.token}`,
              },
            });
            alert("Caixinha deletada!")
            getDreamBox();
        } catch (e) {
            alert("Ocorreu um erro, tente novamente mais tarde!")
        }
    };

    const [dreambox, setDreambox] = useState({});

    const formatMoney = (money) => {
        return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(money);
    }

    useEffect(() => {
        getDreamBox();
    }, [])

    return(
        <div className="planning">
            <NavBar/>
            <div className="dreambox-box">
                <span className="dreambox-title">Caixinhas</span>
                <div className="dreambox">
                    {
                        dreambox?.length ? dreambox.map((data, index) =>
                            <div className="dreambox-card" key={index}>
                                <div>
                                    <span className="dreambox-card-title">{data.name}:&ensp;</span>
                                    <span>{formatMoney(data.current)}/</span>
                                    <span>{formatMoney(data.goal)}</span>
                                </div>
                                {data.isActive ? 
                                    <div>
                                        <button onClick={() => navigate("/add-value-dreambox", {state: {id: data.id}})}>Adicionar</button>
                                        <button onClick={() => updateDreamBox(data.id)}>Finalizar</button>
                                    </div> : 
                                    <div>
                                        <div className="dreambox-finished">Finalizada</div>
                                        <button onClick={() => deleteDreamBox(data.id)}>Excluir</button>
                                    </div>}
                            </div>
                        ) : <span>Nenhuma caixinha cadastrada...</span>
                    }
                </div>
                <Link to="/add-dreambox">
                    <Button text={"Nova caixinha"}></Button>
                </Link>
            </div>
        </div>
    )
}