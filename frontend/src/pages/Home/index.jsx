import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput"
import { useEffect } from 'react'

export function Home() {

  const data = JSON.parse(localStorage.getItem("wisewallet"));

  useEffect(() => {
      console.log(data.token)
  }, [data])

    return (
      <div>
        <h1>WiseWallet</h1>
        <span>HomePage</span>
      </div>
    )
  }