import './style.scss'
import {useEffect, useState} from "react";
import {useToken} from "../../hooks/useToken.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useUserData} from "../../hooks/useUserData.jsx";

export function FormLogin() {

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        validate()
        signUp()
    }

    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [errorLogin, setErrorLogin] = useState(false)
    const [authenticated, setAuthenticated] = useState(false)
    const {changeToken} = useToken()
    const {changeUserData} = useUserData()
    const navigate = useNavigate();

    const data = {
        username: userName,
        password: password
    }


    async function signUp() {
        try {
            const response = await axios.post("http://localhost:8080/user/login", data)
            if (response.status === 200) {
                changeToken(response.data.jwt)
                changeUserData(response.data)
                setAuthenticated(true)
            } else {
                setAuthenticated(false)
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
            authenticated && navigate("/")
        }, [authenticated]
    )

    function validate() {

    }

    return (
        <div className="login">
            <form className="form-login" onSubmit={handleSubmit}>
                <div className="input-login">
                    <label htmlFor="input-user">User</label>
                    <input
                        className="user-password"
                        id="input-user" type="text"
                        placeholder="Digite seu usuario"
                        name="user"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </div>
                <div className="input-login">
                    <label htmlFor="input-password">Password</label>
                    <input
                        className="user-password"
                        id="input-password"
                        type="password"
                        placeholder="Digite sua senha"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <p>Esqueceu a senha?</p>
                <div className="login-error">
                    {errorLogin && <small>Erro ao fazer login, verifique suas credenciais</small>}
                </div>
                <div className="btn-submit">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
