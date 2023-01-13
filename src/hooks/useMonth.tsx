import {createContext, Dispatch, useContext, useState} from "react";

type context ={
    month: string[]
    changeMonth: Dispatch<string[]>
}
const MonthContext = createContext({} as context)
type propsProvider = { children: React.ReactElement }

export function MonthProvider(props: propsProvider) {

    const [month, setMonth] = useState([
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ])

    function changeMonth(monthReceived: string[]) {
        if (monthReceived !== month) {
            setMonth(monthReceived)
        }
    }
    return(
        <MonthContext.Provider value={{month, changeMonth}}>
            {props.children}
        </MonthContext.Provider>
    )
}

export function useMonth(){
    return useContext(MonthContext)
}

