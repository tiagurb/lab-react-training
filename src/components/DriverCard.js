function DriverCard (props) {

    let stars = ""
    if ( props.rating <= 0.49 ) {
        stars = "☆☆☆☆☆"
    } else if (props.rating <= 1.49) {
        stars ="★☆☆☆☆"
    } else if ( props.rating <= 2.49 ) {
        stars ="★★☆☆☆"
    } else if ( props.rating <= 3.49 ) {
        stars ="★★★☆☆"
    } else if ( props.rating <= 4.49 ) {
        stars ="★★★★☆"
    } else {
        stars ="★★★★★"
    }

    return (
        <div className="driverCard">
            <div>
                <img className="driverPic" src={props.img} alt="driver"/>
            </div>
            <div>
                <h2 className="info name">{props.name}</h2>
                <p className="stars info">{stars}</p>
                <p className="info">{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>

    )
}

export default DriverCard