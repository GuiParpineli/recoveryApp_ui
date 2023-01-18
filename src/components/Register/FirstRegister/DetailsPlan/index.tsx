import {useNavigate, useParams} from "react-router-dom";
import {useToken} from "../../../../hooks/useToken";
import {useEffect, useState} from "react";
import axios from "axios";
import {planProps} from "../../../TypesCaseCSJ";
import "./style.scss"

export function DetailsPlan() {

    const {code} = useParams()
    const {token} = useToken()
    const config = {headers: {Authorization: `Bearer ${token}`}}
    const [plan, setPlan] = useState<planProps>()
    const navigate = useNavigate()

    function returnRegisterPage() {
        navigate("/cadastros")
    }

    useEffect(
        () => {
            axios.get(`http://localhost:8080/plan/bycode?code=${code}`,
                config).then(
                function (res) {
                    setPlan(res.data)
                    console.log(plan)
                })
                .catch(function (error) {
                    console.error(error);
                }).then(function (log) {
                console.info(log)
            })
        }, [code])
    return (
        <>
            {
                plan !== null &&
                <div className="plan-details-container">
                    <div className="title-plan-details">
                        <h1>Detalhes da Assinatura</h1>
                        <div className="btn-back-details">
                            <button onClick={returnRegisterPage}>
                                <span className="material-symbols-outlined"> arrow_back_ios </span>
                            </button>
                        </div>
                    </div>
                    <div className="btn-edit-plan">
                        <button>
                            Editar Assinatura
                        </button>
                    </div>
                    <div className="plan-details">
                        <div className="info-plan">
                            <h3>Id da Assinatura:</h3>
                            <p>{plan?.code}</p>
                            <h3>Assinatura Ativa:</h3>
                            <p>{plan?.planStatus ? "Ativa" : "Desativada"}</p>
                            <h3>Valor do plano:</h3>
                            <p>R$: {plan?.value}</p>
                            <h3>Cliente reincidente?</h3>
                            <p>{plan?.recidivistCustomer ? "Sim" : "Não"}</p>
                        </div>
                        <div className="info-plan">
                            <h3>Data inicial da Assinatura:</h3>
                            <p>{new Date(plan?.initialDate as number).toLocaleDateString("pt")}</p>
                            <h3>Data final da Assinatura:</h3>
                            <p>{new Date(plan?.finalDate as number).toLocaleDateString("pt")}</p>
                            <h3>Data de cadastro:</h3>
                            <p>{new Date(plan?.creationDate as number).toLocaleDateString("pt")}</p>
                        </div>
                        <div className="info-plan">
                            <h3>Produtos do plano:</h3>
                            {
                                plan?.productList.map(
                                    a => (
                                        <div>
                                            <p>{a.name}</p>
                                            <p>{a.statusProduct}</p>
                                        </div>
                                    )
                                )
                            }
                        </div>
                        <div className="info-plan">
                            <h3>Cliente:</h3>
                            <p>Nome: {plan?.customer.name} {plan?.customer.lastName}</p>
                            <p>Telefone: {plan?.customer.phone}</p>
                            <p>Email: {plan?.customer.email}</p>
                            <p>Cidade: {plan?.customer.address.city} /{plan?.customer.address.state}</p>
                        </div>
                        <div className="info-plan">
                            <h3>Segurador da Assinatura:</h3>
                            <p>Nome: {plan?.bondsman.name}</p>
                            <p>Telefone: {plan?.bondsman.phone}</p>
                            <p>Email: {plan?.bondsman.email}</p>
                        </div>
                        <div className="info-plan">
                            <h3>Analista Responsável:</h3>
                            <p>Nome: {plan?.analyst.name} {plan?.analyst.lastname}</p>
                        </div>
                        <div className="info-plan">
                            {
                                plan?.caseCSJ!!.map(
                                    a => (
                                        <>
                                            <div className="founded-data">
                                                <h3>Casos de Recuperação do plano:</h3>
                                                <p>Tipo: {a.type} </p>
                                                <p>Status externo: {a.externalStatus.replace("_", " ")} </p>
                                            </div>
                                            <div className="founded-data">
                                                <h3>Observações do plano: </h3>
                                                {
                                                    a.observation?.map(
                                                        o => (
                                                            <div className="founded-observation">
                                                                <p>{o}</p>
                                                            </div>
                                                        )
                                                    )
                                                }
                                            </div>
                                        </>
                                    )
                                )
                            }
                        </div>
                    </div>

                </div>
            }
        </>
    )
}
