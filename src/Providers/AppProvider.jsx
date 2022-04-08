import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

const storage = sessionStorage;

export const AppContextProvider = ({ children }) => {
    const authData = storage.getItem("auth")
    let parsedAuthData = {};
    if (authData) {
        parsedAuthData = JSON.parse(authData);
    }
    const [auth, setAuth] = useState(parsedAuthData);

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        storage.setItem("auth", JSON.stringify(auth));
    }, [auth]);

    return (
        <AppContext.Provider value={{ auth, setAuth, profile, setProfile }}>
            {children}
        </AppContext.Provider>
    );
};
