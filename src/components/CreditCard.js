function CreditCard (props) {

    let sorce = ""
    if (props.type === "Visa") {
        sorce = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png"
    } else if (props.type === "Master Card") {
       sorce ="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/BR-PT/mcbc_alimentacao-rev_84px.png"
    }

    let backgroundColor = props.bgColor;
    let color = props.color;

    return (
        <div className="creditCard" style={{ color: color, backgroundColor: backgroundColor }}>
            <img className="typeImage" src = {sorce} alt="card"></img>
            <p className="cardNumber">•{props.number}</p>
            <p className="info info1">Expires {props.expirationMonth}/{props.expirationYear}    {props.bank}</p> 
            <p className="info">{props.owner}</p>
        </div>
    )
}

export default CreditCard