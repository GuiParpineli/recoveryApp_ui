import "./style.scss"
import {FormLogin} from "../../components/Form-Login";
export function Login() {
    return (

        <div className="main-login">

            <div className="container-main-login">

                <div className="logo-container-login">
                    <img className="logo"
                         src="src/assets/logo.png"
                         alt="alluEmoji"/>
                </div>
                <FormLogin/>
            </div>
            <footer className="container-footer-login">
                <p>
                    Em caso de duvidas, entre em contato atraves do email suporte@quarkbyte.com
                </p>
            </footer>
        </div>
    )
}
