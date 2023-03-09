import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import "./styles.css";
import { Link } from "react-router-dom";
import jwt from 'jwt-decode';
import axios from 'axios';
import { useEffect, useState } from 'react'

export function Bills() {
  const data = JSON.parse(localStorage.getItem("wisewallet"));
  const decode = jwt(data.token);

  const getBills = async () => {
    const bill = await axios.get(`http://localhost:3001/bill/${decode.id}`, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });
    setBill(bill.data);
  };

  const deleteBill = async (id) => {
    await axios.delete(`http://localhost:3001/bill/${id}`, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });
    getBills();
  };

  const [bill, setBill] = useState({});

  useEffect(() => {
    getBills();
  }, []);

  const getBillSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i].value;
    return sum;
  };

  return (
    <div className="bills">
      <div>
        <NavBar />
      </div>
      <div className="card-bill">
        <span className="bill-name">CONTAS:</span>
        <span>R${getBillSum(bill)}</span>
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
            {
              bill?.length ? bill.map((data, index) =>
            <tr key={index}>
              <td>{data.title}</td>
              <td>{data.category}</td>
              <td>{data.description}</td>
              <td>R${data.value}</td>
              <td>{data.dueDate}</td>
              <td>
                <button className="pay-button" onClick={() => deleteBill(data.id)}>Pagar</button>
              </td>
            </tr>
              ) : null
            }
          </tbody>
        </table>
      </div>
      <div>
        <Link to={"/add-bill"}>
          <Button text={"Adicionar"} />
        </Link>
      </div>
    </div>
  );
}
