import React, {createContext, Dispatch, useContext, useState} from "react";


type context ={
    token: string
    changeToken: Dispatch<string>
    deleteToken: Dispatch<void>
}
type PropsProvider =
    {
        children: React.ReactElement;
    }
const TokenContext = createContext<context>({} as context)

function TokenProvider(props: PropsProvider) {
    const tokenLocalStorage = localStorage.getItem("jwt")!
    const [token, setToken] = useState(
        tokenLocalStorage !== null ? tokenLocalStorage : "")

    function changeToken(tokenReceived: string) {
        if (tokenReceived !== token) {
            setToken(tokenReceived!)
            localStorage.setItem("jwt", tokenReceived!)
        }
    }

    function deleteToken() {
        localStorage.removeItem("jwt")
        changeToken("")
    }

    return (
        <TokenContext.Provider
            value={{token, changeToken, deleteToken}}>
            {props.children}
        </TokenContext.Provider>
    )
}

const useToken = () => {
    return useContext(TokenContext)
}
export {TokenProvider, useToken}