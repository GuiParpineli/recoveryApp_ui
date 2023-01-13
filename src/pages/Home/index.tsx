import "./style.scss"
import {Outlet} from "react-router-dom";
import {Input} from "../../components/Layout/elements/Input";

export function Home() {
    return (
        <div className="home">
            <div className="home-header">
                <h1>Hello world</h1>
                <Input
                    labelText="teste"
                    text="text"
                    inputType="number"
                />
            </div>
            <div className="home-sidebar">

            </div>
            <div className="home-content">
                <Outlet/>
            </div>
        </div>
    )
}