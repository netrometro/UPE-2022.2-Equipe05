import "./styles.css"
import { useNavigate, Link } from 'react-router-dom';

export function NavBar() {
    const navigate = useNavigate();

    return (
     <div className='navbar'>
        <div className='logo'>
            <Link to="/">
                <img src="../../../public/WISEWALLET.png" alt="Logo WiseWallet" width="350" />
            </Link>
        </div>
        <div className='menu'>
            <button className='menuButton'>TRANSAÇÕES</button>
            <button className='menuButton'>CONVERSOR</button>
            <button className='menuButton'>PLANEJAMENTO</button>
            <button className='menuButton'>CONTAS</button>
            <Link to="/login">
            <button className="logoutButton" onClick={() => localStorage.clear()} >SAIR</button>
            </Link>
        </div>
     </div>   
    )
}