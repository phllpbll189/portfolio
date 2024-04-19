import { useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import './Portfolio.css'
import { Filter } from '../components/Filter/Filter'
import { Project } from '../components/Project/Project'

export const Portfolio = () =>{
    let [filter, setFilter] = useState({
        "Javascript": false, 
        "C++": true,
        "Java": false
    })

    let settings = Object.keys(filter).map((lang) => {
        
    })

    return(
        <>
            <Navbar/>
            <div className='proj_greet'>Projects</div>
            <Filter selection={filter} setSelection={setFilter}/>
            <Project BackImg={"TestProject.jpg"} Title={"Test"}/>
        </>
    )
}