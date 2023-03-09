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
      <div className="card-bill">
        <span className="bill-name">CONTAS:</span>
        <span>R$valor</span>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Categoria</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data de vencimento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><button className="pay-button">Pagar</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Link to={"/add-bill"}>
          <Button text={"Adicionar"}/>
        </Link>
      </div>
    </div>
  )
}
