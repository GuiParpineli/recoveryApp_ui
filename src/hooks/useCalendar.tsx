import {createContext, Dispatch, useContext, useState} from "react";

type context ={
 calendarTheme: string
 changeCalendarTheme: Dispatch<any>
}

const CalendarContext = createContext({} as context)
type propsProvider = { children: React.ReactElement }

export function CalendarProvider(props: propsProvider) {
    const [calendarTheme, setCalendarTheme] = useState("")

    function changeCalendarTheme(value: string) {
        setCalendarTheme(value)
    }

    return (
        <CalendarContext.Provider value={{calendarTheme, changeCalendarTheme}}>
            {props.children}
        </CalendarContext.Provider>
    )
}

export function useCalendar(){
    return useContext(CalendarContext)
}
