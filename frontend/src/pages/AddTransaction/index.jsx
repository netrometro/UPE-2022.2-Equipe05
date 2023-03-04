import { NavBar } from "../../components/NavBar";

export function AddTransaction() {
  return (
    <div>
      <NavBar/>
      <h1>Adicionar Transação</h1>

      <div>
        <form>
          <div>
            <label>Título</label>
            <input type="text"/>

            <br/>

            <label>Conta
              <input type="radio" name="transactionType" value="conta"/>
            </label>

            <label>Receita
              <input type="radio" name="transactionType" value="receita"/>
            </label>

            <label>Despesa
              <input type="radio" name="transactionType" value="despesa"/>
            </label>

            <br/>

            <label>Valor
              <input type="number" inputMode="decimal" min="0" step=".01"/>
            </label>

            <br/>

            <label>Categoria
              <input type="text"/>
            </label>

            <br/>

            <label>Descrição
              <input type="text"/>
            </label>

            <br/>

            <button>Salvar</button>

          </div>
        </form>
      </div>

    </div>
  )
}
