import { useNavigate, Link } from 'react-router-dom';

export function NavBar() {
    const navigate = useNavigate();

    return (
     <div>
        <div>
            <span>WiseWallet</span> {/*aqui vai o logo*/}
        </div>
        <div>
            <button>TRANSAÇÕES</button>
            <button>CONVERSOR</button>
            <button>PLANEJAMENTO</button>
            <button>CONTAS</button>
            <Link to="/login">
            <button onClick={() => localStorage.clear()} >SAIR</button>
            </Link>
        </div>
     </div>   
    )
}