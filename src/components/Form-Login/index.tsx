import './style.scss'
import {useState} from "react";

export function FormLogin() {

    const handleSubmit = () => {

    }

    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")

    return (
        <div className="form-login">
            <form action="Login">
                <div>
                    <label htmlFor="input-user">User</label>
                    <input id="input-user" type="text"/>
                </div>
                <div>
                    <label htmlFor="input-password">Password</label>
                    <input id="input-password" type="text"/>
                </div>
                <div className="remember">
                    <input id="remember" type="checkbox"/>
                    <label htmlFor="remember">Relembrar</label>
                </div>
                <div>
                    <small>Esqueceu a senha?</small>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}