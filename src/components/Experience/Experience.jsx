import { Template } from "./Template"

export const Experience = () => {

    const inspaceDuty = [
        "Created front end interfaces in ReactJS",
        "Created documentation of processes and deliverables with Confluence",
        "Updated and created new tasks on Jira",
        "Wrote end-to-end tests in Cyprus",
        "Wrote integration tests in Jest"
    ]

    const leahyDuty = [
        "Collaborated with Secret Service to create full-stack web app",
        "Created front end interfaces in ReactJS",
        "Created third normal form database designs and wrote SQL queries",
        "Encrypted database and used JWT’s for security",
        "Investigated possible security vulnerabilities",
        "Created Restful API to access database",
        "Updated and created new tasks on Trello"
    ]

    return(
        <div className="experience-container">
            <h3 id="experience-header">Experience</h3>
            <Template title="Full Stack Web Developer" name="The Leahy Center" dates={{start: "Sep 2021", end: "May 2022"}} logo="leahy" duties={leahyDuty}/>
            <Template title="Junior Software Engineer" name="Inspace Proximity" dates={{start: "Jun 2021", end: "Aug 2022"}} logo="inspace" duties={inspaceDuty}/>
        </div>
    )
}