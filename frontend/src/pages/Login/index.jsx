import axios from 'axios';
import { useState } from 'react'
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput"

export function Login() {

  const [data, setData] = useState({
    email: "",
    password: "",
  })
  
  const login = async (ev) => {
    try {
      ev.preventDefault();
      const response = await axios.post("http://localhost:3001/login", data);
      console.log(response?.data)
    } catch(e) {
      console.log(e)
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
            <a href="">Cadastre-se</a>
        </form>
      </div>
    )
  }