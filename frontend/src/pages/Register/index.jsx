import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const save = async (ev) => {
    try {
      if (data.password.length >= 6) {
        ev.preventDefault();
        await axios.post("http://localhost:3001/user", data)
        alert("Conta criada com sucesso, realize o login!")
        navigate("/login");
      } else {
        ev.preventDefault();
        alert("A senha precisa ter pelo menos 6 digitos")
      }
    } catch(e) {
      alert("Ocorreu um erro! Tente novamente!")
    }
  }

    return (
      <div>
        <form onSubmit={save}>
            <h1>WISEWALLET</h1>
            <label htmlFor="username">Nome</label>
            <TextInput id={"username"} type={"username"} name={"username"} placeholder={"Digite seu nome"} value={data.name} onChange={ev => setData({...data, name: ev.target.value})}/>
            <label htmlFor="email">E-mail</label>
            <TextInput id={"email"} type={"email"} name={"email"} placeholder={"Digite seu email"} value={data.email} onChange={ev => setData({...data, email: ev.target.value})}/>
            <label htmlFor="password">Senha</label>
            <TextInput id={"password"} type={"password"} name={"password"} placeholder={"**************"} value={data.password} onChange={ev => setData({...data, password: ev.target.value})}/>
            <Button text={"CADASTRAR"} type={"submit"}/>
            <Link to="/login">Já tem conta? Realize o login</Link>
        </form>
      </div>
    )
  }