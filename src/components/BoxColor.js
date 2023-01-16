function BoxColor (props) {

    return (
        <div>
            <p className="flex" style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>rgb({props.r}, {props.g}, {props.b})</p>
        </div>
    )
}

export default BoxColor