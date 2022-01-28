import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = props => {
    const authenticated = JSON.parse(localStorage.getItem('authenticated')) || false;
    const [auth, setAuth] = useState(authenticated)

    return (
        <LoginContext.Provider value={[auth, setAuth]}>
            {props.children}
        </LoginContext.Provider>
    )
}