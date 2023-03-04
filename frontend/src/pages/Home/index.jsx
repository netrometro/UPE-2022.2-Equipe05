import jwt from 'jwt-decode';
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput"
import { NavBar } from "../../components/NavBar"
import { useEffect, useState } from 'react'
import axios from 'axios';

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
      <div>
        <NavBar/>
        <span>Olá {user.name}</span>
      </div>
    )
  }