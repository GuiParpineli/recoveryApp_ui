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
    analyst: string,
    initialDay: number,
    finalDay: number,
    note: string
}
export type scheduler =
    {
        id: string,
        userId: string,
        userName: string,
        tasks: task[ ],
        links: [
            {
                rel: string,
                href: string,
                title: string
            }
        ]
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
    const [scheduler, setScheduler] = useState<scheduler[]>([

            {
                id: "163fb300-6954-48a4-8f34-1162a4d1f497",
                userId: "953dd986-c8fa-4d7d-b3ea-483a9304b5e5",
                userName: "Guilherme",
                tasks: [
                    {
                        title: "Dar baixa em plano Xjs34",
                        planCode: "puy123",
                        planCustomer: "Cristian  Simsen",
                        planCaseType: "TECHNICALSUPPORT",
                        analyst: "gui",
                        initialDay: 1673376738389,
                        finalDay: 1673376738389,
                        note: "checar se foi pago"
                    },
                    {
                        title: "Dar baixa em plano Xjs34",
                        planCode: "puy123",
                        planCustomer: "Cristian  Simsen",
                        planCaseType: "TECHNICALSUPPORT",
                        analyst: "gui",
                        initialDay: 1673376738389,
                        finalDay: 1673376738389,
                        note: "checar se foi pago"
                    },
                    {
                        title: "Dar baixa em plano Xjs34",
                        planCode: "puy123",
                        planCustomer: "Cristian  Simsen",
                        planCaseType: "TECHNICALSUPPORT",
                        analyst: "gui",
                        initialDay: 1673376738389,
                        finalDay: 1673376738389,
                        note: "checar se foi pago"
                    }
                ],
                links: [
                    {
                        rel: "PLAN",
                        href: "http://localhost:8080/plan/allbyid?id=4b983164-7b02-4218-ae8a-4dde9d258dbe,5068c5bf-c2e0-4a91-ac4e-84183548fdc3,8e678e06-34de-4c35-bd98-8583ff67a863",
                        title: "Alberto"
                    }
                ]
            }
    ]
    )

    const {token} = useToken()
    const [daySelected, setDaySelected] = useState<string>("")
    const [selectTask, setSelectTask] = useState<task>({
            title: "Confirmar pagamento",
            planCode: "teste",
            planCustomer: "Alberto  Robson",
            planCaseType: "SINISTRO",
            analyst: "gui",
            initialDay: 1673635938359,
            finalDay: 1673635938359,
            note: "Ligar dia 10/02"
        }
    )

    useEffect(() => {
        setValue(value.year(props.currentYear))
        setValue(value.month(props.month))
        setCalendar(CalendarBuild(value))
    }, [value, props, calendarTheme])


    function updateMonth(e: React.MouseEvent<HTMLDivElement>) {
        props.updateMonth([props.month])
        changeCalendarTheme("week-view")
    }

    function showInputTask() {
        setInputVisibility(!inputVisibility)
    }


    function showTaskView() {
        setTaskViewDetails(!taskViewDetails)
    }

    function selectNewTask(e: React.SetStateAction<task>) {
        setSelectTask(e)
    }

    function saveDaySelected(e: string) {
        setDaySelected(e)
    }

    const config = {headers: {Authorization: `Bearer ${token}`}}

    async function fetchTasks() {
        try {
            const res =
                await axios.get("http://localhost:8080/scheduler/all",
                    config)
            if (res.status === 200) {
                setScheduler(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTasks()
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
                                                key={index + weekDay.toString()}
                                                day={weekDay}
                                                month={props.month}
                                                year={props.currentYear}
                                                scheduler={scheduler}
                                                showinputTask={showInputTask}
                                                showDetailsTask={showTaskView}
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