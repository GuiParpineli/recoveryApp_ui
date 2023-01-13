import {useEffect, useState} from "react";
import moment from "moment";
import {DayCard} from "../DayCard/index.jsx";
import "./style.scss"
import {CalendarBuild} from "../CalendarBuild/index.js";
import {useCalendar} from "../../hooks/useCalendar.jsx";
import {useMonth} from "../../hooks/useMonth.jsx";
import {TaskInput} from "../TaskInput/index.jsx";
import {TaskCardView} from "../TaskCardView/index.jsx";
import axios from "axios";
import {useToken} from "../../hooks/useToken.jsx";

export function MonthCard(props) {

    const [value, setValue] = useState(
        moment().locale("pt").month(props.month).year(props.currentYear)
    )
    const [calendar, setCalendar] = useState([])
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]
    const weekDaysComplete = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const {calendarTheme, changeCalendarTheme} = useCalendar()
    const [inputVisibility, setInputVisibility] = useState(false)
    const [taskViewDetails, setTaskViewDetails] = useState(false)
    const {month} = useMonth()
    const [tasks, setTasks] = useState([])
    const {token} = useToken()
    const [daySelected, setDaySelected] = useState()

    useEffect(() => {
        setValue(value.year(props.currentYear))
        setValue(value.month(props.month))
        setCalendar(CalendarBuild(value))
    }, [value, props, calendarTheme])


    function updateMonth(e) {
        props.updateMonth([props.month])
        changeCalendarTheme("week-view")
        console.log(calendarTheme)
    }

    function showInputTask() {
        setInputVisibility(!inputVisibility)
    }

    const [selectTask, setSelectTask] = useState("")

    function showTaskView() {
        setTaskViewDetails(!taskViewDetails)
    }

    function selectNewTask(e) {
        setSelectTask(e)
        console.log(e)
    }

    function saveDaySelected(e) {
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
                        <div className="week" key={weeks}>
                            {
                                weeks.map(a =>
                                    (
                                        <DayCard
                                            key={a._d.getTime() + props.month}
                                            day={a}
                                            month={props.month}
                                            year={props.currentYear}
                                            tasks={tasks}
                                            showinputTask={showInputTask}
                                            shotDetailsTask={showTaskView}
                                            selectTask={selectNewTask}
                                            daySelected={daySelected => saveDaySelected(daySelected)}
                                        />
                                    )
                                )
                            }
                        </div>
                    )
                )
            }

        </div>
    )
}