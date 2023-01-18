import "./style.scss"
import {Dispatch, useEffect, useRef, useState} from "react";
import {useCalendar} from "../../../hooks/useCalendar";
import {TasksCardTitle} from "../TasksCardTitle";
import {Day} from "../CalendarStyled";
import {scheduler, task} from "../MonthCard";
import moment from "moment";

type monthProps = {
    day: moment.Moment,
    month: string,
    year: number,
    scheduler: scheduler
    showinputTask: Dispatch<void>,
    showDetailsTask: () => void,
    selectTask: Dispatch<task>,
    daySelected: Dispatch<string>
}

export function DayCard(props: monthProps) {

    const [dayState, setDayState] = useState("")
    // @ts-ignore
    const day = props.day._d
    const [currentMonth, setCurrentMonth] = useState(
        new Date(props.month + props.year))
    const {calendarTheme} = useCalendar()

    function showInputSaveTask() {
        props.showinputTask()
    }

    function showDetailsTask() {
        props.showDetailsTask()
    }

    useEffect(() => {
    }, [props])

    let today = useRef()
    useEffect(() => {
        setCurrentMonth(new Date(props.month + props.year))
        if (day.getMonth() !== currentMonth.getMonth()) {
            setDayState("nonPertenceMonth")
        }
        // @ts-ignore
        if (props.day._d.toDateString() === new Date().toDateString()) {
            // @ts-ignore
            today.current.scrollIntoView({block: "center"})
            // @ts-ignore
            today.current.valueOf().classList.add("today")
            console.log(today)
        }
    }, [props])

    const handleClickDate = () => {
        // @ts-ignore
        props.daySelected(props.day._d)
    }

    return (
        <div className={`calendar-days ${calendarTheme}`}>
            <Day
                // @ts-ignore
                ref={today}
                className={calendarTheme}
                state={dayState} onClick={handleClickDate}>
                {props.day.format("DD").toString()}
                <button className="add-task-btn" onClick={showInputSaveTask}>
                    <span className="material-symbols-outlined"> add_task </span>
                </button>
                {
                        <TasksCardTitle
                            key={props.scheduler.id}
                            data={props.scheduler.tasks}
                            // @ts-ignore
                            day={props.day._d.toDateString()}
                            showDetails={showDetailsTask}
                            selectTask={props.selectTask}
                        />
                }
            </Day>
        </div>
    )
}