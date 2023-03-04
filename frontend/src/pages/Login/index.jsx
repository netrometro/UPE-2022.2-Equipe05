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
    } catch {}
  }

    return (
      <div>
        <form>
            <h1>WISEWALLET</h1>
            <label htmlFor="email">E-mail</label>
            <TextInput id={"email"} type={"email"} name={"email"} placeholder={"Digite seu email"} value={data.email}/>
            <label htmlFor="password">Senha</label>
            <TextInput id={"password"} type={"password"} name={"password"} placeholder={"**************"}/>
            <Button text={"LOGIN"} type={"submit"} value={data.password}/>
            <a href="">Cadastre-se</a>
        </form>
      </div>
    )
  }