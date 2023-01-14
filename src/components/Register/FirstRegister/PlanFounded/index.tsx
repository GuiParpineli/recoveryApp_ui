import "./style.scss"
import {planProps} from "../../../TypesCaseCSJ";

export function PlanFounded(props: planProps) {
    return (
        <div className="founded-plan">
            <div className="founded-data">
                <h3>Nome do Cliente:</h3>
                <p>{`${props.bondsman.name}
                  ${props.bondsman.lastName}`}</p>
            </div>
            <div className="founded-data">
                <h3>Valor do plano:</h3>
                <p>R$: {props.value}</p>
            </div>
            <div className="founded-data">
                <h3>Email do cliente:</h3>
                <p>{props.bondsman.email}</p>
            </div>
            <div className="founded-data">
                <h3>Telefone do cliente:</h3>
                <p>{props.bondsman.phone}</p></div>
            <div className="founded-data">
                <h3>Analista Responsavel:</h3>
                <p>{`${props.analyst.name} 
                ${props.analyst.lastname}`}
                </p>
            </div>
            {
                props?.caseCSJ!!.map(
                    a => (
                        <>
                            <div className="founded-data">
                                <h3>Cases do plano:</h3>
                                <p> {a.type} </p>
                            </div>
                        </>
                    )
                )
            }
            <div className="founded-data">
                <h3>Data inicial do plano:</h3>
                <p>{new Date(props.initialDate).toLocaleDateString("pt")}</p>
            </div>
            <div className="founded-data">
                <h3>Data final do plano:</h3>
                <p>{new Date(props?.finalDate!!).toLocaleDateString("pt")}</p>
            </div>
        </div>
    )
}