import {Navigate, useLocation} from "react-router-dom";


export const setToken = (token) => {
    // stockage du token
    localStorage.setItem('myToken', token)
}

export const fetchToken = (token) => {
    // fetch du token
    return localStorage.getItem('myToken')
}

export const RequireToken = ({children}) => {
    let auth = fetchToken();
    let location = useLocation();

    if (!auth) {
        return <Navigate to="/" state={{from: location}} />;
    }

    return children
}