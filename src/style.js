import styled from "styled-components";

export const StyledCard = styled.div`
    width: 550px;
    height: 320px;
    background-color: #323A49FF;
    position: relative;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: rgb(206 227 233) 2px 0px 5px 2px;
    @media (max-width: 670px) {
    width: 370px;
    height: 350px;
    margin: inherit;
  }
`

export const AdviceIdBlock = styled.div`
    color: #52FFA8FF;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: absolute;
    top: 30px;
    width: 550px;
    @media (max-width: 670px) {
    width: 370px;
  }
`

export const AdviceSlip = styled.div`
    color: #CEE3E9FF;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 30px 20px 10px;
    padding: 15px;
`

export const Divider = styled.div`
    position: relative;
    bottom: 30px;
    @media (max-width: 670px) {
    display: none;
    }
`

export const DividerMobile = styled.div`
    display: none;
    @media (max-width: 670px) {
    display: flex;
    position: relative;
    top: -20px;
    }
`

export const Button = styled.div`
    position: absolute;
    bottom: -35px;
    border-radius: 100%;
    padding: 15px 15px 10px;
    background-color: #52FFA8FF;
    &:hover {
    cursor: pointer;
    box-shadow: rgba(82, 265, 168, 1) 0px 5px 30px;
    transition: 0.5s;
    }
`

export const FooterContainer = styled.div`
    color: #CEE3E9FF;
    margin-top: 50px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px; 
`

export const Link = styled.a`
& > a {
    text-decoration: none;
    color: #52FFA8FF;
    letter-spacing: 3px;
    }
`

export const Tech = styled.div`
      font-size: 20px;
      color: #CEE3E9FF;
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 20vh;
    `

export const Contact = styled.div`
    color: #CEE3E9FF;
    display: flex;
    flex-direction: column;
    margin: 15vh 0 -15vh;
`

