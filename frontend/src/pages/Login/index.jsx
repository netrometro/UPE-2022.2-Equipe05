import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput"

export function Login() {

    return (
      <div>
        <form>
            <h1>WISEWALLET</h1>
            <label htmlFor="email">E-mail</label>
            <TextInput id={"email"} type={"email"} name={"email"} placeholder={"Digite seu email"}/>
            <label htmlFor="password">Senha</label>
            <TextInput id={"password"} type={"password"} name={"password"} placeholder={"**************"}/>
            <Button text={"LOGIN"} type={"submit"}/>
            <a href="">Cadastre-se</a>
        </form>
      </div>
    )
  }