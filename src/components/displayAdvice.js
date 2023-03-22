const DisplayAdvice = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.data.slip.advice}</h3>
            <h4>{props.data.slip.id}</h4>
        </div>
    )
}

export default DisplayAdvice
