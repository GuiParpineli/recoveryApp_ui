import "./style.scss"
import {JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState} from "react";
import {planProps} from "../../../TypesCaseCSJ";

export function RegisterCaseInput(props: { code: string; setPlanConfirmed: (e: string) => void; }) {
    const [caseType, setCaseType] = useState("")
    useEffect(() => console.log(caseType), [caseType])
    return (
        <div className="case-container">
            <div className="inputs-casecsj">
                <p>Id da Assinatura</p>
                <div className="code-plan-input">
                    <p> {props.code} </p>
                </div>

               {/* <label htmlFor="">Valor com Desconto:</label>
                <input type="text"/>*/}
{/*
                <label htmlFor="">Tipo de Resolução:</label>
                <select name="" id="">
                    <option selected={true} disabled={true}>Selecione uma opção</option>
                    <option value="CHARGEBACK_PAGO">CHARGEBACK PAGO</option>
                    <option value="COMPRA">COMPRA</option>
                    <option value="COMPRA_MAIS_MULTA">COMPRA MAIS MULTA</option>
                    <option value="CREDITO_MAIS_COMPLEMENTO">CREDITO MAIS COMPLEMENTO</option>
                    <option value="DEBITO">DEBITO</option>
                    <option value="DEBITO_MAIS_COMPLEMENTO">DEBITO MAIS COMPLEMENTO</option>
                    <option value="DEVOLUCAO">DEVOLUCAO</option>
                    <option value="DEVOLUCAO_MAIS_MULTA">DEVOLUCAO MAIS MULTA</option>
                    <option value="DEVOLUCAO_MAIS_REPARO">DEVOLUCAO MAIS REPARO</option>
                    <option value="DEVOLUCAO_MAIS_MULTA">DEVOLUCAO MAIS MULTA</option>
                    <option value="ESTORNO">ESTORNO</option>
                    <option value="PAGAMENTO_DE_REPARO">PAGAMENTO DE REPARO</option>
                    <option value="RECORRENCIA_PAGA">RECORRENCIA PAGA</option>
                    <option value="RENOVACAO">RENOVACAO</option>
                    <option value="RENOVACAO_MAIS_UM_REAL">RENOVACAO MAIS UM REAL</option>
                    <option value="RENOVACAO_MAIS_MULTA">RENOVACAO MAIS MULTA</option>
                    <option value="RENOVACAO_MAIS_MULTA_MAIS_UM_REAL">RENOVACAO MAIS MULTA MAIS UM REAL</option>
                    <option value="RESSARCIMENTO">RESSARCIMENTO</option>
                    <option value="RESSARCIMENTO_MAIS_MULTA">RESSARCIMENTO MAIS MULTA</option>
                    <option value="TAXA_DE_ATIVACAO_DE_SINISTRO_PAGA">TAXA DE ATIVACAO DE SINISTRO PAGA</option>
                </select>
*/}
                <label htmlFor="">Motivo</label>
                <select name="" id="" onChange={e => setCaseType(e.target.value)}>
                    <option selected={true} disabled={true}>Selecione uma opção</option>
                    <option value="SINISTRO">SINISTRO</option>
                    <option value="MISAPPROPRIATION">APROPRIAÇÃO INDEBITA</option>
                    <option value="TECHNICAL SUPPORT">ASSISTENCIA TECNICA</option>
                </select>

                <label htmlFor="">Observação</label>
                <div className="input-caseCSJ-observation">
                    <textarea name="" id="" ></textarea>
                </div>

            </div>

            {
                caseType === "SINISTRO" &&
                <div className="casetype-inputs">
                    <SinistroRegisterInputs/>
                </div>
            }{
            caseType === "MISAPPROPRIATION" &&
            <div className="casetype-inputs">
                <MisappropriationRegisterInputs/>
            </div>
        }{

            caseType === "TECHNICAL SUPPORT" &&
            <div className="casetype-inputs">
                <TechnicalSupportRegisterInputs/>
            </div>
        }

            <div className="btn-case-register">
                <div className="add-buttons">
                    <p>Adicionar Tel.</p>
                    <button><span className="material-symbols-outlined"> add_call </span></button>
                    <p>Adicionar Codigo de postagem</p>
                    <button><span className="material-symbols-outlined"> local_shipping </span></button>
                </div>
                <div className="btn-cancel-send">
                    <button className="cancel-btn-inputcsj" onClick={() => props.setPlanConfirmed(" ")}>Cancelar
                    </button>
                    <button className="confirm">Confirmar</button>
                </div>
            </div>
        </div>
    )
}