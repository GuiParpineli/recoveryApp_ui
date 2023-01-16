import {useEffect, useState} from "react";
import {useToken} from "../../../../hooks/useToken";
import axios from "axios";
import {planProps} from "../../../TypesCaseCSJ";
import {PlanFounded} from "../PlanFounded";
import {Link} from "react-router-dom";
import {RegisterCaseInput} from "../RegisterCaseInput";
import "./style.scss"

export function SearchCaseFirstRegister() {
    const [code, setCode] = useState("")
    const [planFounded, setPlanFounded] = useState<planProps | null>(null)
    const [notFound, setNotFound] = useState(false)
    const [caseClosed, setCaseClosed] = useState(false)
    const [planConfirmed, setPlanConfirmed] = useState("")
    const {token} = useToken()

    const config = {headers: {Authorization: `Bearer ${token}`}}

    function handlerSubmitPlanCode(e: { preventDefault: () => void; }) {
        e.preventDefault()
        fetchPlanbyCode().then(r => {
        })
        setPlanConfirmed(" ")
    }

    function confirmPlan() {
        setPlanConfirmed("plan-confirmed")
    }


    async function fetchPlanbyCode() {
        try {
            const res =
                await axios
                    .get(`http://localhost:8080/plan/bycode?code=${code}`,
                        config)
            if (res.status === 200) {
                setPlanFounded(res.data)
                setNotFound(false)
            } else {
                setNotFound(true)
                setPlanFounded(null)
            }

        } catch (error) {
            console.log(error)
            setPlanFounded(null)
            setNotFound(true)
        }
    }

    useEffect(() => {
            if (planFounded !== null) {
                planFounded?.caseCSJ!!.map(a => {
                        console.log(a.externalStatus)
                    if (a.externalStatus === "RECUPERADO") {
                        setCaseClosed(true)
                        console.log(caseClosed)
                    } else {
                        setCaseClosed(false)
                    }
                })
            }
        }, [planFounded]
    )


    console.log(planFounded)
    return (
        <div className={`register-container`}>
            <form onSubmit={handlerSubmitPlanCode} className="search-register-container">
                <div className="input-register">
                    <h1 className="title-register">
                        Cadastro CSJ
                    </h1>
                    <div className="input-codeplan">
                        <label htmlFor="register">ID da assinatura</label>
                        <input value={code} type="text"
                               id="register"
                               onChange={e => setCode(e.target.value)}/>
                        <button className="search-plans">
                            Buscar Assinatura
                        </button>
                    </div>
                </div>
            </form>
            {
                planFounded !== null &&
                <div className={`search-plans-founded ${planConfirmed}`}>
                    {
                        <PlanFounded
                            key={planFounded?.code}
                            {...planFounded}
                        />
                    }

                    <div className="image-product">
                        <img src="src/assets/iphone.png" alt=""/>
                    </div>

                    <div className="btn-confirm-plan">
                        {caseClosed ?
                            <>
                                <button onClick={confirmPlan}>
                                    Confirmar Assinatura
                                </button>
                                <Link to={`/plandetails/${planFounded?.code}`}>
                                    <button> Ver Plan</button>
                                </Link>
                            </> :
                            <Link to={`/plandetails/${planFounded?.code}`}>
                                <button> Ver Plan</button>
                            </Link>
                        }
                    </div>
                </div>

            }
            {
                notFound &&
                <h1 className="plan-notFound">
                    Nenhuma assinatura encontrada
                </h1>
            }
            {
                planFounded !== null && caseClosed &&
                planConfirmed === "plan-confirmed" &&
                <RegisterCaseInput
                    key={planFounded.code + 4}
                    {...planFounded}
                    setPlanConfirmed={setPlanConfirmed}
                />
            }
        </div>
    )
}
