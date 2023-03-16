import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import "./styles.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import jwt from 'jwt-decode';
import axios from 'axios';
import { useEffect, useState } from 'react'

export function Planning() {
    return(
        <div>
            <NavBar/>
            <span>Planejamento</span>
        </div>
    )
}