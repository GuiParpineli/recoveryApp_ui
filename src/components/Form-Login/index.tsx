import './style.scss'
import {useState} from "react";

interface data {
    user: string;
    password: string
}

export function FormLogin() {

    const handleSubmit = () => {

    }

    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")
    const [errorLogin, setErrorLogin] = useState(false)


    const data: data = {
        user: user,
        password: password
    }

    function signUp() {

    }

    function validate() {
    }

    return (
        <div className="form-login">
            <form action="Login">
                <div>
                    <label htmlFor="input-user">User</label>
                    <input
                        id="input-user" type="text"
                        placeholder="Digite seu usuario"
                        name="user"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="input-password">Password</label>
                    <input
                        id="input-password"
                        type="text"
                        placeholder="Digite sua senha"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="remember">
                    <input id="remember" type="checkbox"/>
                    <label htmlFor="remember">Relembrar</label>
                </div>
                <div>
                    <p>Esqueceu a senha?</p>
                </div>
                <div className="login-error">
                    {errorLogin && <small>Erro ao fazer login, verifique suas credenciais</small>}
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}