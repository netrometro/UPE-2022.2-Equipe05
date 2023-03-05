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

  const getUser = async () => {
    const user = await axios.get(`http://localhost:3001/user/${decode.id}`, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      }
    });
    setUser(user.data)
  }

  const [user, setUser] = useState({});
  
  useEffect(() => {
    getUser();
  });

    return (
      <div className='homeBox'>
        <NavBar/>
        <span>Olá {user.name}</span>

        <div>
          <span>Receita</span>
          <span>Valor:</span>
        </div>

        <Link to="/add-transaction">
          <Button text={"Adicionar"}/>
        </Link>
      </div>
    )
  }
