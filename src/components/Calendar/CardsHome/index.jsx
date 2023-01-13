import './style.scss'

export function CardsHome() {
    return (
        <div className="container-card-dashboard">
            <h1 className="title-cards-home">Controle de dados</h1>

            <div className="card-container">
                <div className="cards one">
                    <p>Entradas</p>
                    <h1>12</h1>
                </div>
                <div className="cards two">
                    <p>Recuperações</p>
                    <h1>36</h1>
                </div>
                <div className="cards three">
                    <p>Em aberto</p>
                    <h1>50</h1>
                </div>
                <div className="cards four">
                    <p>Tempo Médio Rec.</p>
                    <h1>11 dias</h1>
                </div>
                <div className="cards four">
                    <p>Default de 90 Aberto</p>
                    <h1>3</h1>
                </div>
                <div className="cards four">
                    <p>Default Recuperado</p>
                    <h1>9</h1>
                </div>
            </div>

            <div className="card-down-container">
                <div className="cards-down">
                    <div>
                        <p>Valores Recuperados</p>
                        <h1>R$15.234,55</h1>
                    </div>
                    <div>
                        <p>Valores em Aberto</p>
                        <h1>R$7.520,20</h1>
                    </div>
                    <div>
                        <p>Parcelas de Acordos</p>
                        <h1>R$800,77</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
