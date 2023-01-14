import "./style.scss"
import {useEffect, useState} from "react";
import axios from "axios";
import {useToken} from "../../../hooks/useToken";
import {useUserData} from "../../../hooks/useUserData";

export function TaskInput(props: { daySelected: string; showinputTask: () => void; fecthTasks: () => void; }) {

    const [title, setTitle] = useState("")
    const [finalDate, setFinalDate] = useState("")
    const [idPlan, setIdPlan] = useState("")
    const [observation, setObservation] = useState("")
    const [saveSucessfully, setSaveSucessfully] = useState(false)
    const {token} = useToken()
    const {userData} = useUserData()
    const dateSelected = Date.parse(props.daySelected)

    function showInputTaskV() {
        props.showinputTask()
    }

    const handleSubmitTask = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        validateTasks()
        sendTask().then(r => {
        })
    }
    const config = {headers: {Authorization: `Bearer ${token}`}}

    const data = {
        title: title,
        planCode: idPlan,
        initialDate: dateSelected,
        note: observation
    }

    function validateTasks() {
    }

    async function sendTask() {
        try {
            const response = await
                axios.post("http://localhost:8080/task",
                    data, config)
            if (response.status === 200) {
                let dataScheduler = {
                    user: userData.id,
                    tasksID: [response.data.id]
                }
                console.log(dataScheduler)
                await sendSchedulerTask(dataScheduler)
                console.log(response.data)
                props.fecthTasks()
            } else {
                setSaveSucessfully(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function sendSchedulerTask(data: { user: string; tasksID: any[]; }) {
        try {
            const response = await axios
                .post("http://localhost:8080/scheduler",
                    data, config)
            if (response.status === 200) {
                console.log(response.data)
                showInputTaskV()
            } else {
                setSaveSucessfully(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="input-task-container">
            <form action="" onSubmit={handleSubmitTask}>
                <div className="task-create">
                    <h1>Criar Tarefa</h1>
                </div>
                <div className="title-task">
                    <label htmlFor="title">Titulo</label>
                    <input value={title}
                           type="text"
                           name="title"
                           id="title"
                           onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="id-assinatura">
                    <label htmlFor="codePlan">Id Assinatura</label>
                    <input value={idPlan}
                           type="text"
                           name="codePlan"
                           id="codePlan"
                           onChange={e => setIdPlan(e.target.value)}
                    />
                </div>
                <div className="observacao-task">
                    <label htmlFor="observation">Obervação</label>
                    <textarea value={observation}

                              name="observation"
                              id="observation"
                              onChange={e => setObservation(e.target.value)}
                    />
                </div>
                <div className="btn-task">
                    <button onClick={showInputTaskV} className="cancel-task">
                        Cancelar
                    </button>
                    <button className="confirm-task">
                        Agendar
                    </button>
                </div>
            </form>
        </div>
    )
}