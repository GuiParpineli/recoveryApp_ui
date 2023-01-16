export function TechnicalSupportRegisterInputs() {
    return (
        <>
                <label htmlFor="">Valor do laudo tecnico</label>
                <input type="number"/>
                <label htmlFor="">Status</label>
                <select name="" id="">
                    <option value={1}>Sim</option>
                    <option value={0}>Não</option>
                </select>
        </>
    )
}