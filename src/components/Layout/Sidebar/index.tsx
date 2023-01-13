import React, {useCallback, useRef, useState} from "react";
import {Link} from "react-router-dom";
import "./style.scss"

export function Sidebar() {

    const [menus, setMenus] = useState(document.getElementsByClassName("active"))
    const [menusDesactived, setMenusDesactived] = useState(document.getElementsByClassName("menu-list"))
    const [barHide, setBarHide] = useState(false)


    function activeMenu(e: any) {
        for (let i = 0; i < menus.length; i++) {
            menus.item(i)?.classList.remove("active")
        }
        menusDesactived.item(e.target.id)?.classList.add("active")
    }

    function hideBar() {
        let bar = document.getElementById("sidebar")
        bar?.classList.toggle("hide")
        setBarHide(!barHide)
    }

    return (
        <div className="container-sidebar" id="sidebar">
            <ul className="menu-side-container">
                <div className="menu-list hider" onClick={hideBar}>
                    <li className="hider" onClick={hideBar}>
                        {barHide ?
                            <span onClick={hideBar} className="material-symbols-outlined"> keyboard_arrow_right </span>
                            :
                            <span onClick={hideBar} className="material-symbols-outlined"> navigate_before </span>
                        }
                    </li>
                </div>
                <div className="menu-list active">
                    <li>
                        <Link to="" id="1" onClick={e=> activeMenu(e.target)}>
                            <span id="1" onClick={activeMenu} className="material-symbols-outlined">Home </span>
                            <p id="1" onClick={activeMenu}>Home</p>
                        </Link>
                    </li>
                </div>
                <div className={`menu-list`}>
                    <li>
                        <Link to="/dashboard" id="2" onClick={activeMenu}>
                            <span id="2" onClick={activeMenu} className="material-symbols-outlined">dashboard</span>
                            <p id="2" onClick={activeMenu}>DashBoard</p>
                        </Link>
                    </li>
                </div>
                <div className={`menu-list`}>
                    <li>
                        <Link to="/cadastros" id="3" onClick={activeMenu}>
                            <span id="3" onClick={activeMenu}
                                  className="material-symbols-outlined">app_registration</span>
                            <p id="3" onClick={activeMenu}>Cadastros</p>
                        </Link>
                    </li>
                </div>
                <div className={`menu-list`}>
                    <li>
                        <Link to="/agenda" id="4" onClick={activeMenu}>
                            <span id="4" onClick={activeMenu} className="material-symbols-outlined">event</span>
                            <p id="4" onClick={activeMenu}>Agenda</p>
                        </Link>
                    </li>
                </div>
                <div className={`menu-list`}>
                    <li>
                        <Link to="" id="5" onClick={activeMenu}>
                            <span id="5" onClick={activeMenu} className="material-symbols-outlined">lab_profile</span>
                            <p id="5" onClick={activeMenu}>Relatórios</p>
                        </Link>
                    </li>
                </div>
                <div className={`menu-list last`}>
                    <li>
                        <Link to="" id="6" onClick={activeMenu}>
                            <span id="6" onClick={activeMenu} className="material-symbols-outlined">person</span>
                            <p id="6" onClick={activeMenu}>Perfil</p>
                        </Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}