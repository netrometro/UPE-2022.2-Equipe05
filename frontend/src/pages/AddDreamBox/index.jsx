import { NavBar } from "../../components/NavBar"
import { Button } from "../../components/Button"
import { TextInput } from "../../components/TextInput";
import { TextInputDescription } from "../../components/TextInputDescription";
import "./styles.css"
import jwt from 'jwt-decode';
import axios from 'axios';
import { useState } from "react"

export function AddDreamBox() {
    return(
        <div className="add-dreambox-add">
            <NavBar/>
            <div className="add-dreambox-form">
                <div className="add-dreambox-title">
                    <span>Adicionar uma nova caixinha</span>
                </div>
                <div className="add-dreambox-text">
                    <form action="">
                        <label>Nome</label>
                        <TextInput/>
                        <label>Objetivo</label>
                        <TextInput/>
                        <Button type={'submit'} text={"Salvar"}></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}