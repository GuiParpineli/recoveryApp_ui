import "./style.scss"
import {Outlet} from "react-router-dom";
import {Header} from "../../components/Layout/Header";
import {Sidebar} from "../../components/Layout/Sidebar";

export function Home() {
    return (
        <div className="home">
            <div className="home-header">
                <Header/>
            </div>
            <div className="home-sidebar">
               <Sidebar/>
            </div>
            <div className="home-content">
                <Outlet/>
            </div>
        </div>
    )
}