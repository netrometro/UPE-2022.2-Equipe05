import jwt from 'jwt-decode';
import axios from 'axios';

import { useState } from "react"

import "./style.css"

export function TransactionBox() {
  const userData = JSON.parse(localStorage.getItem("wisewallet"));
  const decode = jwt(userData.token);

  const [data, setData] = useState({
    userId: decode.id,
    type: "receita",
    title: "",
    category: "",
    value: 0,
    description: ""
  })

  const save = async (ev) => {
    try {
      ev.preventDefault();
      await axios.post("http://localhost:3001/transaction", data)
      alert("Transação salva com sucesso!")
    } catch(e) {
      alert("Ocorreu um erro! Tente novamente!")
    }
  }

  return (
    <div>
      <form className="transaction-form" onSubmit={save}>
        <div className="add-transaction">
          <label>Título</label>
          <input required type="text" value={data.title} onChange={ev => setData({...data, title: ev.target.value})}/>

          <select required id="types" value={data.type} onChange={ev => setData({...data, type: ev.target.value})}>
            <option value="receita">Receita</option>
            <option value="conta">Conta</option>
            <option value="despesa">Despesa</option>
          </select>

          <label>Valor
            <input required type="number" inputMode="decimal" min="0" step=".01" value={data.value} onChange={ev => setData({...data, value: parseFloat(ev.target.value)})}/>
          </label>

          <label>Categoria
            <input required type="text" value={data.category} onChange={ev => setData({...data, category: ev.target.value})}/>
          </label>

          <label>Descrição
            <input required type="text" className="description" value={data.description} onChange={ev => setData({...data, description: ev.target.value})}/>
          </label>

          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  )
}
