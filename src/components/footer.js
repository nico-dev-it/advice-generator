import {Contact, FooterContainer, Link, Tech} from "../style";
import {FaLinkedinIn, FaReact} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiStyledcomponents} from 'react-icons/si';
import {AiFillApi, AiFillGithub} from 'react-icons/ai';
import {CgBrowser} from 'react-icons/cg';

const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <p>Challenge by <Link><a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a></Link>.
                    Coded by <Link><a href="https://nicolas-herbreteau.com">Nicolas Herbreteau</a></Link>.</p>
            </FooterContainer>
            <Contact>
                <p>Get in touch!</p>
                <Link><a href="https://nicolas-herbreteau.com"><CgBrowser/></a></Link>
                <Link><a href="https://github.com/nico-dev-it"><AiFillGithub/></a></Link>
                <Link><a href="https://www.linkedin.com/in/nicolas-herbreteau/"><FaLinkedinIn/></a></Link>
            </Contact>
            <Tech>
                <FaReact/>
                <IoLogoJavascript/>
                <SiStyledcomponents/>
                <AiFillApi/>
            </Tech>
        </div>
    )
}

export default Footer