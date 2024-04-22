import { useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import './Portfolio.css'
import { Filter } from '../components/Filter/Filter'
import { Project } from '../components/Project/Project'
import { useDispatch, useSelector } from 'react-redux'
import { openWidget, closeWidget } from '../Redux/widgetSlice'

export const Portfolio = () =>{
    const currentWidget = useSelector(state => state.widgetSlice.widget)
    const dispatch = useDispatch()

    let [filter, setFilter] = useState({
        "Javascript": false, 
        "C++": true,
        "Java": false
    })

    const setWidget = (text) => {
        return {
            type: "openWidget",
            payload: text 
        }
    }

    const handleClick = () => {
        dispatch(openWidget())
    } 

    let settings = Object.keys(filter).map((lang) => {
        
    })

    return(
        <>
            <Navbar/>
            <div className='proj_greet'>Projects</div>
            <Filter selection={filter} setSelection={setFilter}/>
            <Project name='3d Graphics Sphere' onClick={() => {handleClick("3dGraphic")}}/>
            <div>{currentWidget}</div>
        </>
    )
}