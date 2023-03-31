import { NavBar } from "../../components/NavBar"
import "./style.css"
import { Link, useNavigate } from "react-router-dom";
import jwt from 'jwt-decode';
import { useEffect, useState } from 'react'
import axios from 'axios';
import * as XLSX from "xlsx"

export function Transactions() {
  const data = JSON.parse(localStorage.getItem("wisewallet"));
  const decode = jwt(data.token);

  const navigate = useNavigate();

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

  const saveXlsx = (transactions) => {
    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'transactions.xlsx');
  };

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
                <button className="delete-button" onClick={() => navigate("/update-transaction", {state: {id: data.id}})}>Editar</button>
              </td>
              <td>
                <button className="delete-button" onClick={() => deleteTransaction(data.id)}>Excluir</button>
              </td>
            </tr>
              ) : <span className="transaction-empty-text">Nenhuma conta cadastrada...</span>
            }
          </tbody>
        </table>
      </div>
    <div>
    <button onClick={() => saveXlsx(transaction)}>Salvar Planilha</button>
    </div>
      </div>
      </div>
  )
}
