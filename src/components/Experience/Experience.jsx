import { Template } from "./Template"

export const Experience = () => {
    return(
        <div className="experience-container">
            <h3 id="experience-header">Experience</h3>
            <Template title="Full Stack Web Developer" name="The Leahy Center" dates={{start: "Sep 2021", end: "May 2022"}} logo="leahy"/>
            <Template title="Junior Software Engineer" name="Inspace Proximity" dates={{start: "Jun 2021", end: "Aug 2022"}} logo="inspace"/>
        </div>
    )
}