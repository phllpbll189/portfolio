import { useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import './Portfolio.css'
import { Filter } from '../components/Filter/Filter'
import { Project } from '../components/Project/Project'
import { useSelector } from 'react-redux'

export const Portfolio = () =>{
    const currentWidget = useSelector(state => state.widgetReducer.widget)
    console.log(currentWidget)

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
            <div>{currentWidget}</div>
        </>
    )
}