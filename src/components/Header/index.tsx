import './style.scss'

export function Header() {
    return (
        <header className="header-main">
            <div className="logo-header-home">
                <img src="src/assets/logo.png" alt=""/>
            </div>
            <div className="header-main-input">
                <input type="text"/>
            </div>
            <div className="search-container-icon">
                <button className="search-button">
                    <span className="material-symbols-outlined black"> search </span>
                    <p>Buscar</p>
                </button>
            </div>
            <div className="perfil-container">
                <button className="notification-button">
                    <span className="material-symbols-outlined"> notifications </span>
                </button>
                <button className="logout-button">
                    <span className="material-symbols-outlined"> logout </span>
                </button>
            </div>
        </header>
    )
}