import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import "./styles.css";
import { Link } from "react-router-dom";
import jwt from 'jwt-decode';
import axios from 'axios';
import { useEffect, useState } from 'react'

export function CurrencyConverter() {
    return (
        <div className="currency-converter">
            <NavBar/>
            <span>
                AAAAAAAA
            </span>
        </div>
    );
}