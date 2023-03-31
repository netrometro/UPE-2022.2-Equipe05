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

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [value, setValue] = useState(0);

    const getTransactionById = async () => {
        try {
            const transaction = await axios.get(`http://localhost:3001/transaction-id/${transactionId}`, {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            }
            });
            setTitle(transaction.data.title)
            setCategory(transaction.data.category)
            setDescription(transaction.data.description)
            setType(transaction.data.type)
            setValue(transaction.data.value)
        } catch (e) {
            console.log(e)
        }
    }

    const data = {
        userId: decode.id,
        title: title,
        category: category,
        description: description,
        type: type,
        value: value
    }

    const updateTransaction = async (ev) => {
        try {
            ev.preventDefault();
            await axios.put(`http://localhost:3001/transaction/${transactionId}`, data, {
                headers: {
                    Authorization: `Bearer ${userData.token}`,
                }
            })
            alert("Transação alterada com sucesso");
            navigate("/transactions")
        } catch (e) {
            ev.preventDefault();
            alert("Ocorreu um erro! Tente novamente mais tarde.")
        }
    }

    useEffect(() => {
        getTransactionById()
        if (!transactionId) {
            navigate("/transactions")
        }
    },[]);


    return (
        
        <div className="transaction-page">
            {console.log(data.title)}
            <NavBar/>
            <div>
                <form className="transaction-form" onSubmit={updateTransaction}>
                    <div className="add-transaction">
                    <label className='label'>Título 
                    <input className='textInput' required type="text" value={title} onChange={ev => setTitle(ev.target.value)}/>
                    </label>

                    <select required id="types" value={type} onChange={ev => setType(ev.target.value)}>
                        <option value="receita">Receita</option>
                        <option value="despesa">Despesa</option>
                    </select>

                    <label>Valor
                        <input className='textInput' required type="number" inputMode="decimal" min="0" step=".01" value={value} onChange={ev => setValue(parseFloat(ev.target.value))}/>
                    </label>

                    <label>Categoria
                        <input className='textInput' required type="text" value={category} onChange={ev => setCategory(ev.target.value)}/>
                    </label>

                    <label>Descrição
                        <input required type="text" className="description" value={description} onChange={ev => setDescription(ev.target.value)}/>
                    </label>

                    <button type="submit">Salvar</button>
                    </div>
                </form>
                        </div>
        </div>
    )
}