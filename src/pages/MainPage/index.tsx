import "./style.scss"
import {TableMainPage} from "../../components/TableMainPage";
import {useEffect, useState} from "react";
import axios from "axios";
import {CardsHome} from "../../components/CardsHome";

export function MainPage() {

    const [cases, setCases] = useState([])

    useEffect(() => {
        try {
            fetch("http://localhost:8080/plan/allfull").then(
                res => {
                    res.json().then(
                        data =>
                            setCases(data)
                    )
                }
            )
        } catch (error) {
            console.log(error)
        }
        console.log(cases)
    }, [])


    return (
        <div>
            <CardsHome/>
            <main className="container-main-page">
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
            </main>
        </div>
    )
}
