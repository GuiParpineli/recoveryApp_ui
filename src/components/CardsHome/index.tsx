import './style.scss'

export function CardsHome() {
    return (
        <div className="card-container">
            <div className="cards one">
                <h1>102</h1>
                <p>Casos Ativos</p>
            </div>
            <div className="cards two">
                <h1>85</h1>
                <p>Total Recuperado</p>
            </div>
            <div className="cards three">
                <h1>R$978,99</h1>
                <p>Valores em Ativos</p>
            </div>
            <div className="cards four">
                <h1>85%</h1>
                <p>Taxa de Recuperação</p>
            </div>
        </div>
    )
}