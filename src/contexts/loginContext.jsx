import { createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    const login = localStorage.getItem('logged')

    const [logged, setLogged] = useState(login)


    return(
        <LoginContext.Provider value={{logged}}>
            {children}
        </LoginContext.Provider>
    )

}

