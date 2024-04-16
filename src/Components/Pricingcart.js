import { Link } from "react-router-dom";
import "./Pricingstylee.css"

const Pricingcard=function(){
    return(
        <>
            <div className="pricing">
                <div className="card_container">
                    <div className="cardd">
                        <h3 className="titlecard">- Basic -</h3>
                        <span className="bar"></span>
                        <p className="price"> $ 100</p>
                        <p>- 3 Days -</p>
                        <p>- 3 Pages -</p>
                        <p>- Featured -</p>
                        <p>- Resposnive Design -</p>
                        <Link to="/contact" className="btn_card">PURCHASE NOW</Link>
                    </div>
                    <div className="cardd">
                        <h3 className="titlecard">- premium -</h3>
                        <span className="bar"></span>
                        <p className="price"> $ 200</p>
                        <p>- 2 Days -</p>
                        <p>- 5 Pages -</p>
                        <p>- Featured -</p>
                        <p>- Resposnive Design -</p>
                        <Link to="/contact" className="btn_card">PURCHASE NOW</Link>
                    </div>
                    <div className="cardd">
                        <h3 className="titlecard">- Business -</h3>
                        <span className="bar"></span>
                        <p className="price"> $ 300</p>
                        <p>- 5 Days -</p>
                        <p>- 8 Pages -</p>
                        <p>- Featured -</p>
                        <p>- Resposnive Design -</p>
                        <Link to="/contact" className="btn_card">PURCHASE NOW</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricingcard;