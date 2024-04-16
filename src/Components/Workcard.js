import "./workcardStylee.css"
import { NavLink } from "react-router-dom";
const Workcard=function(props){
    return(
        <>
            <div className="project_card">
                <img src={props.imgsrc} alt="project_1"/>
                <h2 className="pro_title">{props.title}</h2>
                <div className="pro_details">
                    <p>{props.text}</p>
                    <div className="pro_btns">
                        <NavLink to="url.com" className="pro-btn">View</NavLink>
                        <NavLink to="url.com" className="pro-btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Workcard;