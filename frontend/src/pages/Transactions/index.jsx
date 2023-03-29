import { NavBar } from "../../components/NavBar"
import "./style.css"

export function Transactions() {
  return (
    <div className="transactions">
      <NavBar/>
      <div>
        <h1>Transações</h1>
        <div className="card">
          <div className="type">
            Receita
          </div>
          <span className="title">Título</span>
          <span className="description">descricaodescricaodescricaodescricaodescricaodescricaodescricaodescricaodescricaodescricaodescricaodescricaodescricao</span>
          <span className="value">Valor</span>
        </div>
      </div>
    </div>
  )
}
