import jwt from 'jwt-decode';
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput"
import { NavBar } from "../../components/NavBar"
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios';
import "./styles.css"

export function Home() {

  const data = JSON.parse(localStorage.getItem("wisewallet"));
  const decode = jwt(data.token);

  const getIncome = async () => {
    const income = await axios.get(`http://localhost:3001/transaction/${decode.id}/receita`, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      }
    });
    setIncome(income.data)
  }

  const getUser = async () => {
    const user = await axios.get(`http://localhost:3001/user/${decode.id}`, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      }
    });
    setUser(user.data)
  }

  const [user, setUser] = useState({});
  const [income, setIncome] = useState({});
  
  useEffect(() => {
    getUser();
  });

  useEffect(() => {
    getIncome();
  }, []);

  const getIncomeSum = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++)
      sum += arr[i].value
    return sum
  }

    return (
      <div className='homeBox'>
        <NavBar/>
        <span>Olá {user.name}</span>

        <div>
          <span>Receita</span>
          <span>Valor: {getIncomeSum(income)}</span>
        </div>

        <Link to="/add-transaction">
          <Button text={"Adicionar"}/>
        </Link>
      </div>
    )
  }
