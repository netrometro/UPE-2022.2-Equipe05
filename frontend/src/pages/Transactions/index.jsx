import { NavBar } from "../../components/NavBar"
import "./style.css"
import jwt from 'jwt-decode';
import { useEffect, useState } from 'react'
import axios from 'axios';

export function Transactions() {
  const data = JSON.parse(localStorage.getItem("wisewallet"));
  const decode = jwt(data.token);

  const getTransaction = async () => {
    const transaction = await axios.get(`http://localhost:3001/transaction/${decode.id}`, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      }
    });
    setTransaction(transaction.data);
  }

  const deleteTransaction = async (id) => {
    try {
        await axios.delete(`http://localhost:3001/transaction/${id}`, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });
        alert("Transação deletada!")
        getTransaction();
    } catch (e) {
        alert(e)
    }
  };

  const [transaction, setTransaction] = useState({});

  const formatMoney = (money) => {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(money);
  }

  useEffect(() => {
    getTransaction();
    console.log(transaction)
  }, []);

  return (
    <div className="transactions">
      <NavBar/>
      <div className="transaction-body">
        <span className="title">Transações</span>
        <div>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Titulo</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Valor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              transaction?.length ? transaction.map((data, index) =>
            <tr key={index}>
              <td>{data.type}</td>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>{data.category}</td>
              <td>{formatMoney(data.value)}</td>
              <td>
                <button className="delete-button" onClick={() => deleteTransaction(data.id)}>Excluir</button>
              </td>
            </tr>
              ) : <span className="transaction-empty-text">Nenhuma conta cadastrada...</span>
            }
          </tbody>
        </table>
      </div>
      </div>
      </div>
  )
}
