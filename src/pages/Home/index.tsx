import './style.scss'
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {Sidebar} from "../../components/Sidebar";

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
                <h1>Hello World!</h1>
            </div>
            <div className="home-footer">
                <Footer/>
            </div>
        </div>
    )
}