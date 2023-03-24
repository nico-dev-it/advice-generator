import styled from "styled-components";

const DisplayAdvice = (props) => {
    const AdviceIdBlock = styled.div`
    color: #52FFA8FF;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: absolute;
    top: 15px;
    margin-left: 40%;
`
    const AdviceSlip = styled.div`
    color: #CEE3E9FF;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 10px;
`
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
