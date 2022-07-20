function CareScale({careType,scaleValue}){
    // const {scaleValue, careType} = props
    const range = [1,2,3]

    const element = careType === "light" ? "☀️" : "💧"

    return (
        <div> 
            {range.map((rangeElem) =>
            scaleValue >= rangeElem ? <span key={rangeElem.toString()}> {element} </span> : null 
            )}
        </div>
    )
}

export default CareScale