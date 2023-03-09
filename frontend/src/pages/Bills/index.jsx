import { NavBar } from "../../components/NavBar"
import { Button } from "../../components/Button"
import "./styles.css"

export function Bills() {
  return (
    <div className="bills">
      <div>
        <NavBar/>
      </div>
      <div>
        <Button text={"Adicionar"}/>
      </div>
    </div>
  )
}
