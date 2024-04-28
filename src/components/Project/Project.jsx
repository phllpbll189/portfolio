import './Project.css'
import {useDispatch } from 'react-redux'
import { openWidget } from '../../Redux/widgetSlice'

export const Project = ({name, data}) => {    
    const dispatch = useDispatch();
    const widgetData =  data[name]
   
    console.log(data)
    let style = {
        backgroundImage: 'url(' + require(`../../resources/${widgetData.img}`) + ')',
        backgroundPosition: widgetData["bgPosition"],
        backgroundSize: "contain"
    }   

    let handleClick = () => {
        dispatch(openWidget(name))
    }
    
    return (   
        <div className='proj_container' onClick={handleClick} style={style}>
           <div className='title' >{name}</div> 
        </div>
    )
}