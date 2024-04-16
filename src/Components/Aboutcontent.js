import { Link } from "react-router-dom";
import "./aboutcontentstylee.css"
import react1 from "../images/react1.jpg"
import react2 from "../images/react2.webp"


const Aboutcontent=function(){
    return(
        <>
            <div className="about">
                <div className="left">
                    <h1>Who Am I?</h1>
                    <p>Im a reach fony-end developer. I create responsive secure website for my clinets.</p>
                    <Link to="/contact" className="about_btn">CONTACT</Link>
                </div>
                <div className="right">
                    <div className="image_container">
                        <div className="img_stack top">
                            <img src={react1} alt="react_1"/>
                        </div>
                        <div className="img_stack bottom">
                            <img src={react2} alt="react_1"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutcontent;