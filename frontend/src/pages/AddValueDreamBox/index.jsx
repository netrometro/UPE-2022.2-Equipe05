import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import { Link } from "react-router-dom";
import jwt from 'jwt-decode';
import axios from 'axios';
import { useEffect, useState } from 'react'

export function AddValueDreamBox() {
    return(
        <div className="add-value-dreambox-box">
            <NavBar/>
            <div className="add-value-dreambox-form">
                <div className="add-value-dreambox-title">
                    <span>Adicione um valor a caixinha&nbsp;</span>
                    <span className="add-value-dreambox-name">Caixinha</span>
                </div>
                <form action="">
                    <label>Valor a ser adicionado</label>
                    <TextInput/>
                    <Button text={"Adicionar"}/>
                </form>
            </div>
        </div>
    )
}