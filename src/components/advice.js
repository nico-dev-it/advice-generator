const Advice = () => {
    async function adviceData(event) {
        event.preventDefault()
        const data = await fetch(`https://api.adviceslip.com/advice`)
            .then((response) => response.json())
            .then((data) => data)
            console.log(data)
    }
    return (
        <div>
            <button type="submit" onClick={event => adviceData(event)}>GENERATE</button>
        </div>
    )
}

export default Advice