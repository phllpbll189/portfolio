import { Navbar } from '../components/Navbar/Navbar'
import './Portfolio.css'
import { Project } from '../components/Project/Project'
import { useDispatch, useSelector } from 'react-redux'
import { openWidget } from '../Redux/widgetSlice'
import data from '../portFolioData'
import { Widget } from '../components/Widget/Widget'


export const Portfolio = () =>{
    const currentWidget = useSelector(state => state.widgetSlice.widget)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(openWidget())
    }

    return(
        <>
            <Navbar/>
            <div className='proj_greet'>Projects</div>
            <div className='grid-container'>
                <Project name='3d Graphics' data={data} onClick={() => {handleClick("3dGraphic")}}/>
            </div>
            {currentWidget !== "" ? <Widget title={currentWidget}></Widget> : <></>}
        </>
    )
}