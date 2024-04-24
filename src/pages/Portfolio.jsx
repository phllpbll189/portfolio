import { useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import './Portfolio.css'
import { Filter } from '../components/Filter/Filter'
import { Project } from '../components/Project/Project'
import { useDispatch, useSelector } from 'react-redux'
import { openWidget, closeWidget } from '../Redux/widgetSlice'
import data from '../portfolio_data.json'
import { Widget } from '../components/Widget/Widget'


export const Portfolio = () =>{
    const currentWidget = useSelector(state => state.widgetSlice.widget)
    const dispatch = useDispatch()
    const widgetData = JSON.parse(JSON.stringify(data))

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

    const WidgetGen = (widg) => {
        if(widg !== ""){
            return (<Widget title={widg}></Widget>)
        }
    }

    return(
        <>
            <Navbar/>
            <div className='proj_greet'>Projects</div>
            <Filter selection={filter} setSelection={setFilter}/>
            <div className='grid-container'>
                <Project name='3d Graphics Sphere' data={data} onClick={() => {handleClick("3dGraphic")}}/>
                <Project name='3d Graphics Sphere' data={data} onClick={() => {handleClick("3dGraphic")}}/>
                <Project name='3d Graphics Sphere' data={data} onClick={() => {handleClick("3dGraphic")}}/>
                <Project name='3d Graphics Sphere' data={data} onClick={() => {handleClick("3dGraphic")}}/>
            </div>
            {WidgetGen(currentWidget)}
        </>
    )
}