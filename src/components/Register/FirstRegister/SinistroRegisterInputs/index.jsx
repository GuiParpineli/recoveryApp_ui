import {useToken} from "../../hooks/useToken.jsx";
import axios from "axios";

export function SinistroRegisterInputs(props) {

    const {token} = useToken()

    function handleClick(e) {
        e.preventDefault()
        sendSinistro()
    }

    const config = {headers: {Authorization: `Bearer ${token}`}}

    const data = {
        "id": "85c74594-663c-48c2-9320-55afd8395785",
        "type": "Sinistro",
        "date": 1673460774220,
        "stepCSJ": "ACORDO",
        "resolutionDate": 1673460774220,
        "value": 2000.0,
        "observation": [
        "Sinistro observacao aleatoria"
    ],
        "coverageValue": 20.0,
        "resolutionType": "CHARGEBACK_PAGO",
        "initialTime": 1673460774220,
        "sinistroType": "FURTO_QUALIFICADO",
        "imeiStatus": true,
        "boStatus": true,
        "videoStatus": true,
        "sinistroDate": 1673460774220,
        "franchise": 200.0,
        "franchiseTotalValue": 2222.0,
        "discountValue": 20.0,
        "payment": false,
        "valueWithDiscount": 0.0,
        "internalStatus": "CASO_NOVO",
        "externalStatus": "EM_ABERTO",
        "postCode": null,
        "typeCaseCSJ": "SINISTRO"
    }

    async function sendSinistro() {
        try {
            const response = await
                axios.post("http://localhost:8080/case/sinistro",
                    data, config)
            if (response.status === 200) {
                let dataPlan= {
                    "code": "AX4234",
                    "value": "3213.00",
                    "planStatus": "true",
                    "initialDate": "2022-12-27T14:09:23.558188",
                    "finalDate": null,
                    "analystId": "1cc7e996-349f-47af-8362-4f25747281d1",
                    "productListId": [
                    "61e98ea0-edd3-4140-babd-d042a275477e",
                    "4cf44e7d-3214-4dbb-b755-7fde0c6bc8b6"
                ],
                    "customerId": "35b639ba-6ebf-43b8-ab01-532909cef689",
                    "bondsmanId": "ecee1140-8d26-4cc0-a1a2-b157ae8c847d",
                    "caseCSJId": [
                    "59c6b0e9-27f5-404f-9af2-4aaa0bd2b45a"
                ]
                }
                console.log(dataScheduler)
                await sendSchedulerTask(dataScheduler)
                props.fecthTasks()
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