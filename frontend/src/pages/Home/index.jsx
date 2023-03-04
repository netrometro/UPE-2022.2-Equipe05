import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput"
import { NavBar } from "../../components/NavBar"
import { useEffect } from 'react'

export function Home() {

  const data = JSON.parse(localStorage.getItem("wisewallet"));

  useEffect(() => {
      console.log(data.token)
  }, [data])

    return (
      <div>
        <NavBar/>
      </div>
    )
  }