import Aboutcontent from "../Components/Aboutcontent";
import Footer from "../Components/Footer";
import Heroimag2 from "../Components/Heroimg2";

const About=function(){
    return(
        <>
            <Heroimag2 header="ABOUT." text="Im a friendly Front-End Developer"/>
            <Aboutcontent/>
            <Footer/>
        </>
    )
}

export default About;