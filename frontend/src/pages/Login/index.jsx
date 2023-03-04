import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput"

export function Login() {

    return (
      <div>
        <form>
            <h1>WISEWALLET</h1>
            <TextInput id={"email"} type={"email"} name={"email"} placeholder={"Digite seu email"}/>
            <TextInput id={"password"} type={"password"} name={"password"} placeholder={"**************"}/>
            <Button text={"LOGIN"} type={"submit"}/>
        </form>
      </div>
    )
  }