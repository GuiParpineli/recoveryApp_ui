import './style.scss'
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {Sidebar} from "../../components/Sidebar";
import {Outlet} from "react-router-dom";

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
            <div className="home-footer">
                <Footer/>
            </div>
        </div>
    )
}