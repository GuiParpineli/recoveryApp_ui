import {createContext, useContext, useState} from "react";

const MonthContext = createContext({})
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

    function changeMonth(monthReceived: [string]) {
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

