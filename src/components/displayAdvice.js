import {AdviceIdBlock, AdviceSlip} from "../style";

const DisplayAdvice = (props) => {

    console.log(props)
    return (
        <div>
            <div>
                <AdviceIdBlock>advice #{props.data.slip.id}</AdviceIdBlock>
            </div>
            <div>
                <AdviceSlip>"{props.data.slip.advice}"</AdviceSlip>
            </div>
        </div>
    )
}

export default DisplayAdvice
