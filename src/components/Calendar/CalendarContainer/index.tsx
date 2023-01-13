import "./style.scss"
import {useEffect, useState} from "react";
import moment from "moment";
import {useMonth} from "../../../hooks/useMonth.js";
import {useCalendar} from "../../../hooks/useCalendar.js";
import {MonthCard} from "../MonthCard";

export function CalendarContainer(props: { currentYear: number; }) {
    const {month, changeMonth} = useMonth()
    const {calendarTheme, changeCalendarTheme} = useCalendar()

    moment.updateLocale("pt", {
        months: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
        ]
    })

    useEffect(() => {
    }, [ month])

    return (
        <div className={`container-main-calendar ${calendarTheme}`}>

            <div className="container-calendar" >
                {
                    month.map(
                        (months, index) =>
                        <MonthCard
                            key={months+index}
                            month={months}
                            currentYear={props.currentYear}
                            updateMonth={(monthReturned) =>
                                changeMonth(monthReturned)}
                        />
                    )}
            </div>
        </div>
    )
}