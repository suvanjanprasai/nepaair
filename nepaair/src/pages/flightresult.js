import style from './styles/flightresult.module.css'
function Flightresult(formData) {
    console.log(formData)

    var departure = formData["flightData"]["search_details"]["departure"]
    var destination = formData["flightData"]["search_details"]["destination"]
    var departureTime = formData["flightData"]["search_details"]["departure_time"]
    var adult = formData["flightData"]["search_details"]["adult"]
    var child = formData["flightData"]["search_details"]["child"]

    return (
        <div className={style["container"]}>
            <table className={style["flight-table"]}>
                <caption className={style["flight-caption"]}>Flight Details</caption>
                <thead className={style["flight-header"]}>
                    <tr>
                        <th>Departure</th>
                        <th>Destination</th>
                        <th>Departure Time</th>
                        <th>Adult</th>
                        <th>Child</th>
                    </tr>
                </thead>
                <tbody className={style["flight-body"]}>
                    <tr className={style["flight-row"]}>
                        <td>{departure}</td>
                        <td>{destination}</td>
                        <td>{departureTime}</td>
                        <td>{adult}</td>
                        <td>{child}</td>
                    </tr>
                </tbody>
            </table>
            <table className={style["flight-table"]}>
                <caption className={style["flight-caption"]}>Avilable Flights</caption>
                <thead className={style["flight-header"]}>
                    <tr>
                        <th>Flight ID</th>
                        <th>Departure Time</th>
                        <th>Reaching Time</th>
                        <th>Adult Price ({adult})</th>
                        <th>Child Price ({child})</th>
                        <th>Total Price</th>

                    </tr>
                </thead>
                <tbody className={style["flight-body"]}>
                    {formData["flightData"]["flights"].map((flight, index) => (
                        <tr key={index} className={style["flight-row"]}>
                            <td>{flight[1]}</td>
                            <td>{flight[5].split("T")[1]}</td>
                            <td>{flight[4].split("T")[1]}</td>
                            <td>{flight[6]*parseInt(adult)}</td>
                            <td>{flight[7]*parseInt(child)}</td>
                            <td>{flight[6]*parseInt(adult)+flight[7]*parseInt(child)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Flightresult