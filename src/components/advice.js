import {useState} from "react";
import DisplayAdvice from "./displayAdvice";

const Advice = () => {
    const [advice, setAdvice] = useState([])

    async function adviceData(event) {
        event.preventDefault()
        const data = await fetch(`https://api.adviceslip.com/advice`)
            .then((response) => response.json())
            .then((data) => data)
            console.log(data)
            setAdvice({
                data: data
            })
    }
    return (
        <div>
            <DisplayAdvice data={advice.data} />
            <button type="submit" onClick={event => adviceData(event)}>GENERATE</button>
        </div>
    )
}

export default Advice