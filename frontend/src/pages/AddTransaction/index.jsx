import { NavBar } from "../../components/NavBar";
import { TransactionBox } from "../../components/TransactionBox";
import "./style.css"

export function AddTransaction() {

  return (
    <div className="transaction-page">
      <div>
        <NavBar />
      </div>

      <div>
        <TransactionBox />
      </div>
    </div>
  )
}
