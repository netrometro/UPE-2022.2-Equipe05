import { Navigate } from "react-router-dom";

export function Private ({ Component }) {
    const session = JSON.parse(localStorage.getItem("wisewallet"));

    return session?.token ? <Component /> : <Navigate to="/login" />;
};