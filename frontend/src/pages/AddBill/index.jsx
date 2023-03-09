import { NavBar } from "../../components/NavBar"
import { Button } from "../../components/Button"
import { TextInput } from "../../components/TextInput";
import "./styles.css"
import jwt from 'jwt-decode';
import axios from 'axios';
import { useState } from "react"

export function AddBill() {
  const userData = JSON.parse(localStorage.getItem("wisewallet"));
  const decode = jwt(userData.token);

  const [data, setData] = useState({
    userId: decode.id,
    title: "",
    category: "",
    value: 0,
    description: "",
    dueDate: ""
  })

  const save = async (ev) => {
    try {
      ev.preventDefault();
      await axios.post("http://localhost:3001/bill", data)
      alert("Conta salva com sucesso!")
    } catch(e) {
      alert("Ocorreu um erro! Tente novamente!")
    }
  }

  return (
    <div className="add-bill">
      <div>
        <NavBar/>
      </div>
      <div className="bill-inputs">
        <form onSubmit={save}>
            <label htmlFor="">Título</label>
            <TextInput value={data.title} onChange={ev => setData({...data, title: ev.target.value})}/>
            <label htmlFor="">Valor</label>
            <TextInput type={"number"} value={data.value} onChange={ev => setData({...data, value: parseFloat(ev.target.value)})}/>
            <label htmlFor="">Data de Vencimento</label>
            <TextInput type={"date"} value={data.dueDate} onChange={ev => setData({...data, dueDate: ev.target.value})}/>
            <label htmlFor="">Categoria</label>
            <TextInput value={data.category} onChange={ev => setData({...data, category: ev.target.value})}/>
            <label htmlFor="">Descrição</label>
            <TextInput value={data.description} onChange={ev => setData({...data, description: ev.target.value})}/>
            <Button text={"Salvar"} type={"submit"}/>
        </form>
      </div>
    </div>
  )
}