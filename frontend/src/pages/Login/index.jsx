import axios from 'axios';
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput"

export function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  })
  
  const login = async (ev) => {
    try {
      if (data.password.length >= 6) {
        ev.preventDefault();
        const response = await axios.post("http://localhost:3001/login", data);
        const token = { token: response?.data?.token }
        localStorage.setItem("wisewallet", JSON.stringify(token));
        navigate("/");
      } else {
        ev.preventDefault();
        alert("Credenciais inválidas");
      }
    } catch(e) {
      alert("Credenciais inválidas");
    }
  }

    return (
      <div>
        <form onSubmit={login}>
            <h1>WISEWALLET</h1>
            <label htmlFor="email">E-mail</label>
            <TextInput id={"email"} type={"email"} name={"email"} placeholder={"Digite seu email"} value={data.email} onChange={ev => setData({...data, email: ev.target.value})}/>
            <label htmlFor="password">Senha</label>
            <TextInput id={"password"} type={"password"} name={"password"} placeholder={"**************"} value={data.password} onChange={ev => setData({...data, password: ev.target.value})}/>
            <Button text={"LOGIN"} type={"submit"}/>
            <Link to="/signup">Cadastre-se</Link>
        </form>
      </div>
    )
  }