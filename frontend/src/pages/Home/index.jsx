import { MdAccountCircle } from "react-icons/md"
import jwt from 'jwt-decode';
import { Button } from "../../components/Button";
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

  const getExpense = async () => {
    const expense = await axios.get(`http://localhost:3001/transaction/${decode.id}/despesa`, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      }
    });
    setExpense(expense.data)
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
  const [expense, setExpense] = useState({});
  
  useEffect(() => {
    getUser();
  }), [];

  useEffect(() => {
    getIncome();
  }, []);

  useEffect(() => {
    getExpense();
  }), [];


  const getExpensesSum = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++)
      sum += arr[i].value
    return sum
  }


  const getIncomeSum = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++)
      sum += arr[i].value
    return sum
  }

    return (
      <div className='homeBox'>
        <NavBar/>

        <div className='username'>
          <MdAccountCircle size={40} style={{color: '#091323',}}/>
          <span className='ola'>Olá,&#160;</span>
          <span className='name'>{user.name}</span>
        </div>

        <div className="incomeCard">
          <span className="income">RECEITAS:</span>
          <span>R${getIncomeSum(income)}</span>
        </div>

        <div className="incomeCard">
          <span className="income">DESPESAS:</span>
          <span>R${getExpensesSum(expense)}</span>
        </div>

        <div>
          <Link to="/add-transaction">
            <Button text={"Adicionar"}/>
          </Link>
        </div>
      </div>
    )
  }
