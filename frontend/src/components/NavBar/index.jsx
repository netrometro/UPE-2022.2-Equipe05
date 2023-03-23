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
            <Link to="/transactions">
              <button className='menuButton'>TRANSAÇÕES</button>
            </Link>
            <Link to="/currency-converter">
              <button className='menuButton'>CONVERSOR</button>
            </Link>
            <Link to="/planning">
              <button className='menuButton'>PLANEJAMENTO</button>
            </Link>
            <Link to='/bills'>
              <button className='menuButton'>CONTAS</button>
            </Link>
            <Link to="/login">
              <button className="logoutButton" onClick={() => localStorage.clear()} >SAIR</button>
            </Link>
        </div>
     </div>   
    )
}
