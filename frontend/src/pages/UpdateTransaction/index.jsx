import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { useLocation, useNavigate } from "react-router-dom";
import jwt from 'jwt-decode';
import axios from 'axios';
import { useEffect, useState } from 'react'

export function UpdateTransaction() {

    const location = useLocation();
    const navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem("wisewallet"));
    const decode = jwt(userData.token);
    const transactionId = location?.state?.id

    const getTransactionById = async () => {
        try {
            const dreamBox = await axios.get(`http://localhost:3001/transaction/${transactionId}`, {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            }
            });
            setTransactionById(dreamBox.data)
        } catch (e) {
            console.log(e)
        }
    }

    const [transactionById, setTransactionById] = useState({});

    const [data, setData] = useState({
        userId: decode.id,
        title: transactionById.title,
        category: transactionById.category,
        description: transactionById.description,
        type: transactionById.type,
        value: transactionById.value
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
        if (!transactionId) {
            navigate("/transactions")
        }
        getTransactionById()
    },[]);


    return (
        <div className="transaction-page">
            <NavBar/>
            <div>
                <form className="transaction-form">
                    <div className="add-transaction">
                    <label className='label'>Título 
                    <input className='textInput' required type="text" value={data.title} onChange={ev => setData({...data, title: ev.target.value})}/>
                    </label>

                    <select required id="types" value={data.type} onChange={ev => setData({...data, type: ev.target.value})}>
                        <option value="receita">Receita</option>
                        <option value="despesa">Despesa</option>
                    </select>

                    <label>Valor
                        <input className='textInput' required type="number" inputMode="decimal" min="0" step=".01" value={data.value} onChange={ev => setData({...data, value: parseFloat(ev.target.value)})}/>
                    </label>

                    <label>Categoria
                        <input className='textInput' required type="text" value={data.category} onChange={ev => setData({...data, category: ev.target.value})}/>
                    </label>

                    <label>Descrição
                        <input required type="text" className="description" value={data.description} onChange={ev => setData({...data, description: ev.target.value})}/>
                    </label>

                    <button type="submit">Salvar</button>
                    </div>
                </form>
                        </div>
        </div>
    )
}