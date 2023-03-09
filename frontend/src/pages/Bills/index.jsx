import { NavBar } from "../../components/NavBar"
import { Button } from "../../components/Button"
import "./styles.css"
import { Link } from "react-router-dom";

export function Bills() {
  return (
    <div className="bills">
      <div>
        <NavBar/>
      </div>
      <div>
        <Link to={"/add-bill"}>
          <Button text={"Adicionar"}/>
        </Link>
      </div>
    </div>
  )
}
