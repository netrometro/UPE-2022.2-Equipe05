import { Navigate } from "react-router-dom";

export function Logged ({ Component }) {
    const session = JSON.parse(localStorage.getItem("wisewallet"));

    return session?.token ? <Navigate to="/"/> : <Component />
};