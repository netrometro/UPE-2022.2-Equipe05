import { NavBar } from "../../components/NavBar"
import { Button } from "../../components/Button"
import "./styles.css"

export function AddBill() {
  return (
    <div className="add-bill">
      <div>
        <NavBar/>
      </div>
      <div>
        <span>Add bill</span>
      </div>
    </div>
  )
}