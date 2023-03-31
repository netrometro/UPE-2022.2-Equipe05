import { NavBar } from "../../components/NavBar";
import { TransactionBox } from "../../components/TransactionBox";
import "./style.css"
import { useLocation, useNavigate } from "react-router-dom";

export function AddTransaction() {
  const location = useLocation();
  const transactionId = location?.state?.id
  console.log(transactionId)

  if (transactionId) {
    console.log("tem id")
  } else {
    console.log("não tem id")
  }

  return (
    <div className="transaction-page">
        <NavBar />
      <div>


          <TransactionBox />

        

      </div>
    </div>
  )
}
