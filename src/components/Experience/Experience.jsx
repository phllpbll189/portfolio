import { useState } from "react"
import { Template } from "./Template"

export const Experience = () => {
    const [backgroundStyle, setBackgroundStyle] = useState({backgroundPosition: "0% 30%"})
    const [currentPos, setCurrentPos] = useState(document.body.scrollTop) 


    const scrollHandler = () => {
        console.log(document.body.scrollTop)
        if(Math.abs(currentPos - document.documentElement.scrollTop) > 20){
            console.log("her")
            window.requestAnimationFrame( () => {
                const el = document.querySelector(".experience-container")
                if(el) {
                    const parallax = el.getBoundingClientRect()
                    const screenheight = window.innerHeight
                    const maxDisplacement = screenheight + parallax.height
            
            
                    if(parallax.bottom < maxDisplacement && parallax.bottom > 0){
                        const percent = parallax.bottom / maxDisplacement * 100
                        console.log(percent)
                        setBackgroundStyle({backgroundPosition: `0% ${percent}%`})
                        setCurrentPos(document.documentElement.scrollTop)
                    }
                }
            })
        
        }
    }

    window.addEventListener('scroll', scrollHandler)

    const inspaceDuty = [
        "created front end interfaces in ReactJS",
        "Created documentation of processes and deliverables with Confluence",
        "Updated and created new tasks on Jira",
        "Wrote end-to-end tests in Cyprus",
        "Wrote integration tests in Jest"
    ]

    const leahyDuty = [
        "Collaborated with Secret Service to create full-stack web app",
        "created front end interfaces in ReactJS",
        "Created third normal form database designs and wrote SQL queries",
        "Encrypted database and used JWT’s for security",
        "Investigated possible security vulnerabilities",
        "Created Restful API to access database",
        "Updated and created new tasks on Trello"
    ]

    return(
        <div className="experience-container">
            <div style={backgroundStyle} className="parallax-back"/>
            <h3 id="experience-header">tempS</h3>
            <Template title="Full Stack Web Developer" name="The Leahy Center" dates={{start: "Sep 2021", end: "May 2022"}} logo="leahy" duties={leahyDuty}/>
            <Template title="Junior Software Engineer" name="Inspace Proximity" dates={{start: "Jun 2021", end: "Aug 2022"}} logo="inspace" duties={inspaceDuty}/>
        </div>
    )
}


