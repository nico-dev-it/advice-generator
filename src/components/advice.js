import {useState} from "react";
import DisplayAdvice from "./displayAdvice";

import styled from "styled-components";

const StyledCard = styled.div`
    width: 550px;
    height: 320px;
    background-color: #323A49FF;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -200px 0 0 -230px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    `
const AdviceIdBlock = styled.div`
    color: #52FFA8FF;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: absolute;
    top: 30px;
    width: 550px;
`

const AdviceSlip = styled.div`
    color: #CEE3E9FF;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 30px 20px 10px;
    padding: 15px;
`

const Divider = styled.div `
    position: relative;
    bottom: 30px;
`

const Button = styled.div`
    position: absolute;
    bottom: -35px;
    border-radius: 100%;
    padding: 15px 15px 10px;
    background-color: #52FFA8FF;
    &:hover {
    cursor: pointer;
    box-shadow: rgba(82, 265, 168, 1) 0px 5px 30px;
    }
`

const Advice = () => {
    const [advice, setAdvice] = useState([])

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

    return (
        <StyledCard>
            {
                advice.data != undefined ?
                    <div>
                        <DisplayAdvice data={advice.data}/>
                    </div>
                    : <div>
                        <div>
                            <AdviceIdBlock>advice #117</AdviceIdBlock>
                        </div>
                        <div>
                            <AdviceSlip>"It is easy to sit up and take notice, what's difficult is getting up and taking
                                action."</AdviceSlip>
                        </div>
                    </div>
            }
            <Divider>
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                    <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/>
                    <g transform="translate(212)" fill="#CEE3E9">
                        <rect width="6" height="16" rx="3"/>
                        <rect x="14" width="6" height="16" rx="3"/>
                    </g>
                </g>
            </svg>
            </Divider>
            <Button>
                <div>
                <svg onClick={() => {
                    adviceData();
                }} width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                        fill="#202733"/>
                </svg>
                </div>
            </Button>
        </StyledCard>
    )
}

export default Advice