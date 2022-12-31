import './style.scss'

export function Header() {
    return (
        <header className="header-main">
            <img src="src/assets/logo.png"
                 className="logo-header-home"
                 alt=""/>
            <input className="header-main-input" type="text"/>
            <button className="search-button">
                <span className="material-symbols-outlined">
search
</span>
            </button>
            <div className="perfil-container">
                <button className="perfil-button">
                    <span className="material-symbols-outlined">
person
</span>
                </button>
                <button className="logout-button">
                    <span className="material-symbols-outlined">
logout
</span>
                </button>
            </div>
        </header>
    )
}