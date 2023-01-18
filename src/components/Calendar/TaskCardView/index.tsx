import "./style.scss"
import {Link} from "react-router-dom";
import {ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState, useEffect} from "react";
import {useToken} from "../../../hooks/useToken";
import {task} from "../MonthCard";
import axios from "axios";

type taskView = {
    showTaskview: () => void,
    schedulerId: string,
    taskSelected: task
    fecthTasks: () => void
}

export function TaskCardView(props: taskView) {
    function hideTaskViewDetails() {
        props.showTaskview()
    }

    console.log(props.taskSelected.id)

    const {token} = useToken()
    const config = {headers: {Authorization: `Bearer ${token}`}}
    const [success, setSuccess] = useState(false)

    async function deleteTask() {
        try {
            const res =
                await axios.delete(`http://localhost:8080/scheduler/deleteTask?id=${props.taskSelected.id}&schedulerId=${props.schedulerId}`,
                    config)
            if (res.status === 200) {
                hideTaskViewDetails()
                setSuccess(true)
            } else {
                setSuccess(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => () => props.fecthTasks(), [])

    return (
        <>
            <div className="task-view-main">
                <div className="close-button">
                    <button className="close-btn" onClick={hideTaskViewDetails}>
                        <span className="material-symbols-outlined"> close </span>
                    </button>
                </div>
                <h1 className="title-task-view">{props.taskSelected.title}</h1>
                <div className="task-view-content">
                    <Link to={`/plandetails/${props.taskSelected.planCode}`}>
                        <p>
                            Id do plano: {props.taskSelected.planCode}
                        </p>
                    </Link>
                    <p><b>Cliente:</b> {props.taskSelected.planCustomer}</p>
                    <p><b>Tipo de Recuperação:</b> {props.taskSelected.planCaseType}</p>
                    <p><b>Responsavel:</b> {props.taskSelected.analyst}</p>
                    <p><b>Anotação:</b> {props.taskSelected.note}</p>
                    <div className="task-view-btn">
                        <button onClick={deleteTask}>Deletar Task</button>
                    </div>
                </div>
            </div>
        </>
    )
}