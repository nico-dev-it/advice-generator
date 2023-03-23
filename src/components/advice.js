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
            {
                advice.data != undefined ?
                    <div>
                        <DisplayAdvice data={advice.data} />
                    </div>
                    :null
            }
            <button type="submit" onClick={() => {adviceData(); removeElement()}}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></button>
        </div>
    )
}

export default Advice