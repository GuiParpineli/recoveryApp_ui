import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import moment, {Moment} from "moment";
import "./style.scss"
import {useMonth} from "../../../hooks/useMonth";
import {useToken} from "../../../hooks/useToken";
import {useCalendar} from "../../../hooks/useCalendar";
import {CalendarBuild} from "../CalendarBuild";
import axios from "axios";
import {TaskInput} from "../TaskInput";
import {TaskCardView} from "../TaskCardView";
import {DayCard} from "../DayCard";

type monthCardProps = {
    month: string,
    currentYear: number,
    updateMonth: Dispatch<string[]>
}
export type task = {
    title: string,
    planCode: string,
    planCustomer: string,
    planCaseType: string,
    analyst: string[],
    note: string[],
}
export function MonthCard(props: monthCardProps) {

    const [value, setValue] = useState(
        moment().locale("pt").month(props.month).year(props.currentYear)
    )
    const [calendar, setCalendar] = useState<Moment[][]>([])
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]
    const weekDaysComplete = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const {calendarTheme, changeCalendarTheme} = useCalendar()
    const [inputVisibility, setInputVisibility] = useState(false)
    const [taskViewDetails, setTaskViewDetails] = useState(false)
    const {month} = useMonth()
    const [tasks, setTasks] = useState<task>()
    const {token} = useToken()
    const [daySelected, setDaySelected] = useState<string>("")
    const [selectTask, setSelectTask] = useState<task>({} as task)

    useEffect(() => {
        setValue(value.year(props.currentYear))
        setValue(value.month(props.month))
        setCalendar(CalendarBuild(value))
    }, [value, props, calendarTheme])


    function updateMonth(e: React.MouseEvent<HTMLDivElement>) {
        props.updateMonth([props.month])
        changeCalendarTheme("week-view")
        console.log(calendarTheme)
    }

    function showInputTask() {
        setInputVisibility(!inputVisibility)
    }


    function showTaskView() {
        setTaskViewDetails(!taskViewDetails)
    }

    function selectNewTask(e: React.SetStateAction<task>) {
        setSelectTask(e)
        console.log(e)
    }

    function saveDaySelected(e: string) {
        setDaySelected(e)
        console.log(daySelected)
    }

    const config = {headers: {Authorization: `Bearer ${token}`}}

    async function fetchTasks() {
        try {
            const res =
                await axios.get("http://localhost:8080/scheduler/all",
                    config)
            if (res.status === 200) setTasks(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTasks().then(r => {
        })
    }, [])

    return (
        <div className={`month-card ${calendarTheme}`} onClick={updateMonth}>
            {
                inputVisibility &&
                <div className="input-task-container-main">

                    <TaskInput
                        showinputTask={showInputTask}
                        daySelected={daySelected}
                        fecthTasks={() => fetchTasks()}
                    />
                </div>
            }
            {
                taskViewDetails &&
                <div className="task-details-view">
                    <TaskCardView
                        showTaskview={showTaskView}
                        taskSelected={selectTask}
                    />
                </div>
            }
            <div className="month-cards-header"
                 onClick={e => updateMonth(e)}>
                {value.format("MMMM")}</div>
            <div className="month-cards-week-days">
                {month.length > 1 &&
                    weekDays.map(
                        (value) =>
                            (
                                <div className="week-day">
                                    {value}
                                </div>
                            )
                    )
                }
                {
                    month.length === 1 &&
                    weekDaysComplete.map(
                        (value) =>
                            (
                                <div className="week-day">
                                    {value}
                                </div>
                            )
                    )
                }
            </div>
            {
                calendar.map(
                    (weeks) => (
                        <div className="week" key={weeks.toString()}>
                            {
                                weeks.map(
                                    (weekDay, index) => {
                                    return (
                                            <DayCard
                                                key={ index+weekDay.toString()}
                                                day={weekDay}
                                                month={props.month}
                                                year={props.currentYear}
                                                tasks={tasks}
                                                showinputTask={showInputTask}
                                                shotDetailsTask={showTaskView}
                                                selectTask={selectNewTask}
                                                daySelected={(daySelected: string) => saveDaySelected(daySelected)}
                                            />
                                        );
                                    }
                                )
                            }
                        </div>
                    )
                )
            }

        </div>
    )
}