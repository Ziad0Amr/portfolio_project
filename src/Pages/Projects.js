import Footer from "../Components/Footer";
import Heroimag2 from "../Components/Heroimg2";
import Pricingcard from "../Components/Pricingcart";
import Work from "../Components/Work";

const Project=function(){
    return(
        <>
            <Heroimag2 header="PROJECTS." text="some of my most recent works"/>
            <Work/>
            <Pricingcard/>
            <Footer/>
        </>
    )
}

export default Project;