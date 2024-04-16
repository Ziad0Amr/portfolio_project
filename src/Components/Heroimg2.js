import "./heroimg2.css"
const Heroimag2=function(props){
    return(
        <>
            <div className="hero-img">
                <div className="heading">
                    <h2 className="headingcontent">{props.header}</h2>
                    <p className="discreption">{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default Heroimag2;