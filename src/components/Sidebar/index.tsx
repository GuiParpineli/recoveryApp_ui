import './style.scss'
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export function Sidebar() {

    const [menus, setMenus] = useState(document.getElementsByClassName("active"))
    const [menusDesactived, setMenusDesactived] = useState(document.getElementsByClassName("menu-list"))


    function activeMenu(e) {
        for (let i = 0; i < menus.length; i++) {
            menus.item(i).classList.remove("active")
        }
        menusDesactived.item(e.target.id).classList.add("active")
    }

    return (
        <div className="container-sidebar">
            <ul className="menu-side-container">
                <div className="menu-list active">
                    <li>
                        <Link to="mainpage" id="0" onClick={activeMenu}>
                            <span id="0" onClick={activeMenu} className="material-symbols-outlined">Home </span>
                            <p id="0" onClick={activeMenu}>Home</p>
                        </Link>
                    </li>
                </div>
                <div className={`menu-list`}>
                    <li>
                        <Link to="/dashboard" id="1" onClick={activeMenu}>
                            <span id="1" onClick={activeMenu} className="material-symbols-outlined">dashboard</span>
                            <p id="1" onClick={activeMenu}>DashBoard</p>
                        </Link>
                    </li>
                </div>
                <div className={`menu-list`}>
                    <li>
                        <Link to="" id="2" onClick={activeMenu}>
                            <span id="2" onClick={activeMenu} className="material-symbols-outlined">calculate</span>
                            <p id="2" onClick={activeMenu}>Calculadora</p>
                        </Link>
                    </li>
                </div>
                <div className={`menu-list`}>
                    <li>
                        <Link to="" id="3" onClick={activeMenu}>
                            <span id="3" onClick={activeMenu} className="material-symbols-outlined">event</span>
                            <p id="3" onClick={activeMenu}>Agenda</p>
                        </Link>
                    </li>
                </div>
                <div className={`menu-list`}>
                    <li>
                        <Link to="" id="4" onClick={activeMenu}>
                            <span id="4" onClick={activeMenu} className="material-symbols-outlined">person</span>
                            <p id="4" onClick={activeMenu}>Perfil</p>
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}