import {useToken} from "../../../hooks/useToken";
import {useUserData} from "../../../hooks/useUserData";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function Header() {
    const {changeToken, deleteToken, token} = useToken()
    const {userData} = useUserData()
    const navigate = useNavigate()

    function logout() {
        changeToken("")
        deleteToken()
        navigate("/login")
    }

    useEffect(() => {
        if (localStorage.getItem("jwt") === null ||
            localStorage.getItem("jwt") === "" ||
            token === ""
        ) {
            navigate("/login")
        }
    }, [token])

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
            <div className="user-name">
                {userData.name}
            </div>
            <div className="perfil-container">
                <button className="notification-button">
                    <span className="material-symbols-outlined"> notifications </span>
                </button>
                <button onClick={logout} className="logout-button">
                    <span onClick={logout} className="material-symbols-outlined"> logout </span>
                </button>
            </div>
        </header>
    )
}