const DisplayAdvice = (props) => {
    console.log(props)
    return (
        <div>
            <h4>advice #{props.data.slip.id}</h4>
            <h3>"{props.data.slip.advice}"</h3>
        </div>
    )
}

export default DisplayAdvice
