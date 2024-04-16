import Workcard from "./Workcard";
import Workdata from "./Workdata";
import "./workcardStylee.css"
const Work=function(){
    return(
        <>
            <div className="work_container">
                <h2 className="project_header">Projects</h2>
                <div className="project_container">
                    {
                        Workdata.map((val,ind) => {
                            return(
                                <Workcard 
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    text={val.text}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Work;