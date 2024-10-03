import { Link } from "react-router-dom";
import "./navbar.css"
import { useState } from "react";

const Navbar=function(){
    const [color,setcolor]=useState(false);
    const changecolor=(()=>{
        if(window.scrollY >= 100){
            setcolor(true);
        }else{
            setcolor(false)
        }
    })

    window.addEventListener("scroll",changecolor)
    return(
        <>
            <nav className={color? "navbar navbar-expand-lg navbarcontent navbar-bg" : "navbar navbar-expand-lg navbarcontent"}>
                <div className="container">
                    <Link className="navbar-brand" to="./portfolio_project">Portfolio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="./portfolio_project">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/portfolio_project/project">Project</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/portfolio_project/about">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/portfolio_project/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;