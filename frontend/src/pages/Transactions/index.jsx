import { NavBar } from "../../components/NavBar"
import { CardTransaction } from "../../components/CardTransaction"
import "./style.css"

export function Transactions() {
  return (
    <div className="transactions">
      <NavBar/>
      <div className="transaction-body">
        <div>Transações</div>
        <CardTransaction></CardTransaction>
      </div>
    </div>
  )
}
