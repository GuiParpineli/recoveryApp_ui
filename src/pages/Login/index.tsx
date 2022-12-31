import "./style.scss"
import {FormLogin} from "../../components/Form-Login";

export function Login() {
    return (

        <div className="main">

            <div className="container-main">

                <div className="logo-container">
                    <img className="logo"
                         src="src/assets/logo.png"
                         alt="alluEmoji"/>
                </div>
                <FormLogin/>
            </div>
            <footer>
                <p>
                    Em caso de duvidas, entre em contato atraves do email exemplo@gmail.com
                </p>
            </footer>
        </div>
    )
}