import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput"

export function Register() {

    return (
      <div>
        <form>
            <h1>WISEWALLET</h1>
            <label htmlFor="username">Nome</label>
            <TextInput id={"username"} type={"username"} name={"username"} placeholder={"Digite seu nome"}/>
            <label htmlFor="email">E-mail</label>
            <TextInput id={"email"} type={"email"} name={"email"} placeholder={"Digite seu email"}/>
            <label htmlFor="password">Senha</label>
            <TextInput id={"password"} type={"password"} name={"password"} placeholder={"**************"}/>
            <Button text={"CADASTRAR"} type={"submit"}/>
            <a href="">Já tem conta? Realize o login</a>
        </form>
      </div>
    )
  }