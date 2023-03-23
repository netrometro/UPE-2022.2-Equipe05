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
        {"code" : "AED", "name" : "Dirham dos Emirados"},
        {"code" : "AOA", "name" : "Kwanza Angolano"},
        {"code" : "ARS", "name" : "Peso Argentino"},
        {"code" : "AUD", "name" : "Dólar Australiano"},
        {"code" : "BHD", "name": "Dinar do Bahrein"},
        {"code" : "BOB", "name" : "Boliviano"},
        {"code" : "BRL", "name" : "Real Brasileiro"},
        {"code" : "BTC", "name": "Bitcoin"},
        {"code": "CAD", "name" : "Dólar Canadense"},
        {"code" : "CHF", "name" : "Franco Suíço"},
        {"code" : "CLP", "name" : "Peso Chileno"},
        {"code" : "CNY", "name" : "Yuan Chinês"},
        {"code" : "COP", "name" : "Peso Colombiano"},
        {"code" : "CUP", "name": "Peso Cubano"},
        {"code" : "DOGE", "name" : "Dogecoin"},
        {"code" : "DOP", "name" : "Peso Dominicano"},
        {"code" :"ETH", "name" : "Ethereum"},
        {"code" :"EUR", "name" : "Euro"},
        {"code" :"HKD", "name" : "Dólar de Hong Kong"},
        {"code" :"JPY", "name" : "Iene Japonês"},
        {"code" :"KRW", "name" : "Won Sul-Coreano"},
        {"code" :"MXN", "name" : "Peso Mexicano"},
        {"code" :"NZD", "name" : "Dólar Neozelandês"},
        {"code" :"PEN", "name" : "Sol do Peru"},
        {"code" :"PYG", "name" : "Guarani Paraguaio"},
        {"code" :"RUB", "name" : "Rublo Russo"},
        {"code" :"SGD", "name" : "Dólar de Cingapura"},
        {"code" :"UAH", "name" : "Hryvinia Ucraniana"},
        {"code" :"USD", "name" : "Dólar Americano"}
    ] }

    useEffect(() => {
        console.log(country_list.countries);
    })

    return (
        <div className="currency-converter">
            <NavBar/>
            <div className="currency-converter-box">
                <form action="" className="currency-converter-form">
                    <label htmlFor="">De:</label>
                    <select name="" id=""> 
                    {country_list.countries.map((data, index) => 
                        <option value={data.code}>{data.name}</option>
                    )
                    }
                    </select>
                    <label htmlFor="">Para:</label>
                    <select name="" id="">
                        { country_list.countries.map((data, index) => 
                            <option value={data.code}>{data.name}</option>
                        )
                        }
                    </select>
                    <label htmlFor="">Valor</label>
                    <input type="number" min="0" />
                    <span>Valor</span>
                    <Button text={"Converter"}/>
                </form>
            </div>
        </div>
    );
}