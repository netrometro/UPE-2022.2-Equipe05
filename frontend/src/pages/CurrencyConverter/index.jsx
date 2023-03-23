import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import "./styles.css";
import { Link } from "react-router-dom";
import { TextInput } from "../../components/TextInput";
import jwt from 'jwt-decode';
import axios from 'axios';
import { useEffect, useState } from 'react'

export function CurrencyConverter() {
    let country_list = {"countries" : [
        {"code" : "BRL", "name" : "Real Brasileiro"},
        {"code" :"USD", "name" : "Dólar Americano"},
        {"code" :"EUR", "name" : "Euro"},
        {"code" : "ARS", "name" : "Peso Argentino"},
        {"code": "CAD", "name" : "Dólar Canadense"},
        {"code" :"JPY", "name" : "Iene Japonês"},
        {"code" :"RUB", "name" : "Rublo Russo"},
        {"code" : "BTC", "name": "Bitcoin"},
        {"code" : "DOGE", "name" : "Dogecoin"},
        {"code" :"ETH", "name" : "Ethereum"},
        {"code" : "BOB", "name" : "Boliviano"},
        {"code" : "CLP", "name" : "Peso Chileno"},
        {"code" : "CHF", "name" : "Franco Suíço"},
        {"code" : "AED", "name" : "Dirham dos Emirados"},
        {"code" : "AOA", "name" : "Kwanza Angolano"},
        {"code" : "AUD", "name" : "Dólar Australiano"},
        {"code" : "BHD", "name": "Dinar do Bahrein"},
        {"code" : "CNY", "name" : "Yuan Chinês"},
        {"code" : "COP", "name" : "Peso Colombiano"},
        {"code" : "CUP", "name": "Peso Cubano"},
        {"code" : "DOP", "name" : "Peso Dominicano"},
        {"code" :"HKD", "name" : "Dólar de Hong Kong"},
        {"code" :"KRW", "name" : "Won Sul-Coreano"},
        {"code" :"MXN", "name" : "Peso Mexicano"},
        {"code" :"NZD", "name" : "Dólar Neozelandês"},
        {"code" :"PEN", "name" : "Sol do Peru"},
        {"code" :"PYG", "name" : "Guarani Paraguaio"},
        {"code" :"SGD", "name" : "Dólar de Cingapura"},
        {"code" :"UAH", "name" : "Hryvinia Ucraniana"},
    ] }

    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("BRL");
    const [value, setValue] = useState(1);

    const getCurrency = async () => {
        const currency = await axios.get(`https://economia.awesomeapi.com.br/last/${from}-${to}`);
        setCurrency(currency.data)
    };

    useEffect(() => {
        getCurrency();
    }, [])

    const [currency, setCurrency] = useState({});

    const getIncomeSum = () => {
        const selectedCurrency = currency[from+to]
        if (selectedCurrency) {
            return selectedCurrency['bid'] * value;
        } else {
            return 0
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getCurrency();
    }


    return (
        <div className="currency-converter">
            <NavBar/>
            <div className="currency-converter-box">
                <form className="currency-converter-form" onSubmit={handleSubmit}>
                    <label htmlFor="">De:</label>
                    <select defaultValue={"USD"} onChange={ev => setFrom(ev.target.value)}> 
                    {country_list.countries.map((data) => 
                        <option value={data.code}>{data.name}</option>
                    )
                    }
                    </select>
                    <label htmlFor="">Para:</label>
                    <select defaultValue={"BRL"} onChange={ev => setTo(ev.target.value)}>
                        { country_list.countries.map((data) => 
                            <option value={data.code}>{data.name}</option>
                        )
                        }
                    </select>
                    <label htmlFor="">Valor</label>
                    <input defaultValue={1} type="number" min="1" onChange={ev => setValue(ev.target.value)}/>
                    <span>{to}:&#160;{getIncomeSum().toFixed(2)}</span>
                    <Button text={"Converter"} type={"submit"}></Button>
                </form>
            </div>
        </div>
    );
}