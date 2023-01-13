import "./style.scss"
import React, {useEffect, useState} from "react";
import {useMonth} from "../../hooks/useMonth";
import {useCalendar} from "../../hooks/useCalendar";
import {CalendarContainer} from "../Calendar/CalendarContainer";

export function Scheduler() {

    const [currentYear, setCurrentYear] = useState(2023)
    const {month, changeMonth} = useMonth()
    const {calendarTheme, changeCalendarTheme} = useCalendar()
    function changeAllMonths(){
        changeMonth(
            [
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
            ]
        )
        changeCalendarTheme("")
    }
    useEffect(() => {
    }, [currentYear, month])


    return (
        <div className={`scheduler-main-container &{calendarTheme}`}>
            <div className="header-calendar">
            <h1>Agenda</h1>
            <h1>{currentYear.toString()}</h1>
            <button className="btn-year" onClick={() => setCurrentYear(currentYear - 1)}>
                <span className="material-symbols-outlined"> navigate_before </span>
            </button>
            <button className="btn-year" onClick={() => setCurrentYear(currentYear + 1)}>
                <span className="material-symbols-outlined"> navigate_next</span>
            </button>
            <button className="btn-all-months" onClick={changeAllMonths}>
                <span className="material-symbols-outlined"> apps </span>
            </button>
        </div>
            <div className="scheduler-week-container">
                <CalendarContainer
                    currentYear={currentYear}
                />
                <div className="scheduler-week-days">
                </div>
            </div>
        </div>
    )
}