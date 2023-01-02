import './style.scss'
import {Link} from "react-router-dom";

export function TableMainPage(props) {
    const date = new Date(props.data.initialDate)
    const dateFormat = date.toLocaleDateString()

    return (
        <div className="table-component">
            <table className="table-container">
                <Link to={"details"}>
                    <tr>
                        <th>{props.data.customer.name}</th>
                        <th>{props.data.customer.email}</th>
                        <th>{dateFormat}</th>
                    </tr>
                </Link>
            </table>
        </div>
    )
}