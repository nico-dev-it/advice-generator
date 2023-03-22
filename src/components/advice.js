import {useState} from "react";
import DisplayAdvice from "./displayAdvice";

const Advice = () => {
    const [advice, setAdvice] = useState([])
    const [visible, setVisible] = useState(true)

    async function adviceData() {
        const data = await fetch(`https://api.adviceslip.com/advice`)
            .then((response) => response.json())
            .then((data) => data)
            console.log(data)
            setAdvice({
                data: data
            })
        console.log(advice)
    }

    const removeElement = () => {
        setVisible((prev) => false);
    };

    return (
        <div>
            <p>{visible && (<p>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p>)}</p>
            <DisplayAdvice data={advice.data} />
            <button type="submit" onClick={() => {adviceData(); removeElement()}}>GENERATE</button>
        </div>
    )
}

export default Advice