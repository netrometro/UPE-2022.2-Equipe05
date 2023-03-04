import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput"
import { Logo } from "../../components/Logo"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";
import "./styles.css"

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
      <div className="background">
        <div className="box">
          <div className="logoBox">
            <Logo/>
            <span className='slogan'>FACILITANDO SUA VIDA FINANCEIRA</span>
          </div>
          <div className="registerBox">
            <form onSubmit={save}>
              <span className='spanRegister'>Cadastre-se</span>
              <label htmlFor="username">Nome</label>
              <TextInput id={"username"} type={"username"} name={"username"} placeholder={"Digite seu nome"} value={data.name} onChange={ev => setData({...data, name: ev.target.value})}/>
              <label htmlFor="email">E-mail</label>
              <TextInput id={"email"} type={"email"} name={"email"} placeholder={"Digite seu email"} value={data.email} onChange={ev => setData({...data, email: ev.target.value})}/>
              <label htmlFor="password">Senha</label>
              <TextInput id={"password"} type={"password"} name={"password"} placeholder={"**************"} value={data.password} onChange={ev => setData({...data, password: ev.target.value})}/>
              <Button text={"CADASTRAR"} type={"submit"}/>
              <div className='containerButtonRegister'>
                <Link to="/login">Já tem conta? Realize o login</Link>
              </div>
          </form>
          </div>
        </div>
      </div>
    )
  }