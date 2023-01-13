import "./style.scss"
import {Link} from "react-router-dom";
import {ReactElement, JSXElementConstructor, ReactFragment, ReactPortal} from "react";

type taskView = {
    showTaskview: () => void,
    taskSelected: {
        title: string,
        planCode: string,
        planCustomer: string,
        planCaseType: string,
        analyst: string[],
        note: string[],
    }
}

export function TaskCardView(props: { showTaskview: () => void; taskSelected: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; planCode: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; planCustomer: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; planCaseType: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; analyst: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; note: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }; }) {
    function hideTaskViewDetails() {
        props.showTaskview()
    }

    return (
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
                <p>Cliente: {props.taskSelected.planCustomer}</p>
                <p>Tipo de CSJ: {props.taskSelected.planCaseType}</p>
                <p>Analista Responsavel: {props.taskSelected.analyst}</p>
                <p>Anotação: {props.taskSelected.note}</p>
                <div className="task-view-links">

                </div>
            </div>
        </div>
    )
}