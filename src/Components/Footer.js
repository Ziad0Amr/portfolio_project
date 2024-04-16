import { IoHome } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css"
const Footer=function(){
    return(
        <>
            <div className="footer">
                <div className="container">
                <div className="content-footer">
                    <div className="left">
                        <div className="location">
                            <IoHome className="locat"/>
                            <p>
                                <p>123 Housing Society.</p>
                                <p className="ban">Bangladesh.</p>
                            </p>
                        </div>
                        <div className="phone">
                            <h4 className="cont"><FaPhone className="locat"/> <p>1-2323-343-23</p></h4>
                        </div>
                        <div className="gmail">
                            <h4 className="cont"><BiLogoGmail className="locat"/> <p>info@gamil.com</p></h4>
                        </div>
                    </div>
                    <div className="right">
                        <h2>About the company</h2>
                        <p className="disc">This is Fahimul Kabir.CEO & Founder of Tech.i enjoy discussing new project and design challenges</p>
                        <div className="links">
                            <FaFacebook className="link"/>
                            <FaTwitter className="link"/>
                            <FaLinkedin className="link"/>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Footer;