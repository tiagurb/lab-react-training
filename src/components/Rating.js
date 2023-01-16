function Rating (props) {
  
    let stars = ""
    if ( props.children <= 0.49 ) {
        stars = "☆☆☆☆☆"
    } else if (props.children <= 1.49) {
        stars ="★☆☆☆☆"
    } else if ( props.children <= 2.49 ) {
        stars ="★★☆☆☆"
    } else if ( props.children <= 3.49 ) {
        stars ="★★★☆☆"
    } else if ( props.children <= 4.49 ) {
        stars ="★★★★☆"
    } else {
        stars ="★★★★★"
    }
    return (
        <div>
            {stars}
        </div>
    )
}

export default Rating