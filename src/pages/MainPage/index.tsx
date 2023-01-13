import "./style.scss"
import {useEffect, useState} from "react";
import {useToken} from "../../hooks/useToken.jsx";
import axios from "axios";
import {Scheduler} from "../../components/Scheduler";

export function MainPage() {

    const [cases, setCases] = useState([])
    const {token} = useToken()

/*    useEffect(() => {
        getPlans().then(r => {} )
    }, [])*/

    const config = {headers: {Authorization: `Bearer ${token}`}}

/*    async function getPlans() {
        try {
            const response =
                await axios.get("http://localhost:8080/plan/allfull", config)
            if (response.status === 200) setCases(response.data)
        } catch (error) {
            console.log(error)
        }
    }*/

    return (
        <div>
{/*
            <CardsHome/>
*/}
            <Scheduler/>
        {/*    <main className="container-main-page">
                <h1>Ultimos planos cadastrados</h1>
                <table className="table-title">
                    <tr>
                        <th> Nome</th>
                        <th> Email</th>
                        <th> Chegada no Setor</th>
                    </tr>
                </table>
                {
                    cases.map(
                        a => <TableMainPage
                            key={a.id}
                            data={a}
                        />
                    )
                }
            </main>*/}
        </div>
    )
}
