import './style.scss'

export function TableMainPage(props) {
    const date = new Date(props.data.initialDate)
    const dateFormat = date.toLocaleDateString()

    return (
        <div className="table-component">
            <table className="table-container">
                <tr>
                    <th>{props.data.customer.name}</th>
                    <th>{props.data.customer.email}</th>
                    <th>{dateFormat}</th>
                </tr>
            </table>
        </div>
    )
}