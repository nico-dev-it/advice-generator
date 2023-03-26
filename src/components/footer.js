import {FooterContainer, Link, Tech} from "../style";
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiStyledcomponents } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';



const Footer = () => {
    return (
        <div>
        <FooterContainer>
           <p>Challenge by <Link><a  href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a></Link>. Coded by <Link><a href="https://nicolas-herbreteau.com">Nicolas Herbreteau</a></Link>.</p>
        </FooterContainer>
            <Tech>
                <FaReact />
                <IoLogoJavascript />
                <SiStyledcomponents />
                <AiFillApi />
            </Tech>
        </div>
    )
}

export default Footer