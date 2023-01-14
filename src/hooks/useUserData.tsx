import {createContext, Dispatch, useContext, useState} from "react";

type propsProvider = { children: React.ReactElement }

export type user = {
    id: string,
    name: string,
    lastname: string,
    jwt: string
}

type context = {
    userData: user
    changeUserData: Dispatch<any>
}

const UserContext = createContext<context>({} as context)

function UserDataProvider(props: propsProvider) {
    const [userData, setUserData] = useState<user>({
        id: "",
        name: "",
        lastname: "",
        jwt: ""
    })

    function changeUserData(userReceived: user) {
        setUserData(
            {
                id: userReceived.id,
                name: userReceived.name,
                lastname: userReceived.lastname,
                jwt: userReceived.jwt
            }
        )
    }

    return (
        <UserContext.Provider value={{userData, changeUserData}}>
            {props.children}
        </UserContext.Provider>
    )
}

function useUserData() {
    return useContext(UserContext)
}

export {UserDataProvider, useUserData}