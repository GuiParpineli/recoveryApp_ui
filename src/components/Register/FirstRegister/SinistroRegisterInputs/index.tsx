import axios from "axios";
import {useToken} from "../../../../hooks/useToken";
import {caseCSJType, planInput, planProps} from "../../../TypesCaseCSJ";
import {useState} from "react";

export function SinistroRegisterInputs() {

    const {token} = useToken()
    const [saveSucessfully, setSaveSucessfully] = useState(false)

    function handleClick(e: { preventDefault: () => void; }) {
        e.preventDefault()
        sendSinistro().then(r => {
        })
    }

    const config = {headers: {Authorization: `Bearer ${token}`}}

    const data: caseCSJType = {
        id: "85c74594-663c-48c2-9320-55afd8395785",
        type: "Sinistro",
        date: 1673460774220,
        stepCSJ: "ACORDO",
        resolutionDate: 1673460774220,
        value: 2000.0,
        observation: [
            "Sinistro observacao aleatoria"
        ],
        coverageValue: 20.0,
        resolutionType: "CHARGEBACK_PAGO",
        initialTime: 1673460774220,
        sinistroType: "FURTO_QUALIFICADO",
        imeiStatus: true,
        boStatus: true,
        videoStatus: true,
        sinistroDate: 1673460774220,
        franchise: 200.0,
        franchiseTotalValue: 2222.0,
        discountValue: 20.0,
        payment: false,
        valueWithDiscount: 0.0,
        internalStatus: "CASO_NOVO",
        externalStatus: "EM_ABERTO",
        postCode: null,
        typeCaseCSJ: "SINISTRO"
    }

    async function updatePlan(dataPlan: planInput) {
        try {
            const response = await
                axios.patch("http://localhost:8080/plan",
                    dataPlan, config)
            if (response.status === 200) {
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function sendSinistro() {
        try {
            const response = await
                axios.post("http://localhost:8080/case/sinistro",
                    data, config)
            if (response.status === 200) {
                let dataPlan: planInput= {
                    code: "AX4234",
                    value: 3213.00,
                    planStatus: true,
                    initialDate: "2022-12-27T14:09:23.558188",
                    finalDate: null,
                    analystId: "dd2f8da6-d618-4495-a9a7-2e36c085e174",
                    productListId: [
                    "98f4145f-74d0-4adb-83a6-9942e4dc4155"
                ],
                    customerId: "3c25e355-0e89-4e7c-928b-b3e543e52e74",
                    bondsmanId: "4b14e2b4-05bf-4503-8136-ccf75e94b3df",
                    caseCSJId: [
                    null
                ]
                }
                console.log(dataPlan)
                await updatePlan(dataPlan)

            } else {
                setSaveSucessfully(false)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>

            <label>Data do sinistro</label>
            <input type="date"/>

            <label htmlFor="">Tipo de Sinistro</label>
            <select name="" id="">
                <option value="">FURTO SIMPLES</option>
                <option value="">FURTO QUALIFICADO</option>
                <option value="">ROUBO</option>
                <option value="">PERDA</option>
                <option value="">DANO</option>
                <option value="">DANO DE FABRICA</option>
            </select>

            {/*   <label htmlFor="">IMEI Status</label>
            <select name="" id="">
                <option value={1}>Sim</option>
                <option value={0}>Não</option>
            </select>

            <label htmlFor="">B.O Status</label>
            <select name="" id="">
                <option value={1}>Sim</option>
                <option value={0}>Não</option>
            </select>

            <label htmlFor="">Video Status</label>
            <select name="" id="">
                <option value={1}>Sim</option>
                <option value={0}>Não</option>
            </select>*/}

            {/*  <label htmlFor="">Franquia</label>
            <input type="number"/>

            <label htmlFor="">Valor da Franquia</label>
            <input type="number"/>

            <label htmlFor="">Valor do desconto</label>
            <input type="number"/>

            <label htmlFor="">Valor da cobertura</label>
            <input type="number"/>*/}

        </>
    )
}