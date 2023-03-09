import { NavBar } from "../../components/NavBar"
import { Button } from "../../components/Button"
import { TextInput } from "../../components/TextInput";
import "./styles.css"

export function AddBill() {
  return (
    <div className="add-bill">
      <div>
        <NavBar/>
      </div>
      <div className="bill-inputs">
        <form action="">
            <label htmlFor="">Título</label>
            <TextInput />
            <label htmlFor="">Valor</label>
            <TextInput/>
            <label htmlFor="">Data de Vencimento</label>
            <TextInput type={"date"}/>
            <label htmlFor="">Categoria</label>
            <TextInput/>
            <label htmlFor="">Descrição</label>
            <TextInput/>
            <Button text={"Salvar"}/>
        </form>
      </div>
    </div>
  )
}