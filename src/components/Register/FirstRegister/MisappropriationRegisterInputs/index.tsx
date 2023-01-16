export function MisappropriationRegisterInputs() {
    return (
        <>
            <label htmlFor="">Tipo de Pagemento</label>
            <select name="" id="">
                <option value="">Pagemento Normal</option>
                <option value="">Recorrente</option>
            </select>
            <label htmlFor="">ChargeBack</label>
            <select name="" id="">
                <option value={1}>Sim</option>
                <option value={0}>Não</option>
            </select>
                <label htmlFor="">Data ChargeBack</label>
                <input type="date"/>
        </>
    )
}