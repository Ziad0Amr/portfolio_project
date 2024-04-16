// import title_img from "../images/0bc739968eeb709d8eebbdb132141cb8 (1).jpeg"
import { Link } from "react-router-dom";
import title_img from "../images/0bc739968eeb709d8eebbdb132141cb8 (1).jpeg"

import "./heroimg.css"
const Heroimg=function(){
    return(
        <>
            <div className="mask">
                <div className="hero">
                    <img className="imge" src={title_img} alt="title_img"/>
                </div>
                <div className="content">
                    <p>HI, I'M A FREELANCER.</p>
                    <h1>React Developer.</h1>
                    <div className="btns">
                        <Link to="/project" className="btnn btnn-light">PROJECTS</Link>
                        <Link to="/contact" className="btnn">CONTACT</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heroimg;