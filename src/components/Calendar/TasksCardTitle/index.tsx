import './style.scss'
import {useCalendar} from "../../../hooks/useCalendar";
import {task} from "../MonthCard";

type taskcardProps = {
    showDetails: () => void
    selectTask: (e: task) => void;
    data: task[];
    day: string;
}

export function TasksCardTitle(props: taskcardProps) {
    const {calendarTheme} = useCalendar()

    function showDetailsTask(e: any) {
        props.showDetails()
        selectTask(e)
    }

    function selectTask(e: any) {
        props.selectTask(e)
    }

    /*    console.log(props.data)
        console.log(props.day)
        console.log(new Date(props.data.tasks[0].initialDay).toDateString())*/

    return (
        <div className={`task-container-day ${calendarTheme}`}>
            <div className="task-calendar">

                {
                    props.data.map(
                        a => {
                            if (props.day === new Date(a.initialDay).toDateString()) {
                                return (
                                    <div className="taskday" onClick={e => showDetailsTask(a)}>
                                        <p> {a.title.toString()} </p>
                                    </div>
                                )
                            }
                        }
                    )
                }

            </div>
        </div>
    )
}