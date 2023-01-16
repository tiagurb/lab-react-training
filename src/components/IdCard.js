function IdCard (props) {
    return (
        <div className="flex">

            <div>
                <img className="img" src={props.picture} alt="pict"></img> 
            </div>

            <div>
                <p><b>First name: </b>{props.firstName}</p>
                <p><b>Last name:</b>{props.lastName}</p>
                <p><b>Gender: </b>{props.gender}</p>
                <p><b>Height: </b>{props.height}</p>
                <p><b>Birth: </b>{props.birth}</p>
            </div>
            
        </div>
    )
}

export default IdCard