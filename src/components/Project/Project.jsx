import './Project.css'
import { useSelector, useDispatch } from 'react-redux'
import { openWidget, closeWidget } from '../../Redux/widgetSlice'
import data from '../../portfolio_data.json'

export const Project = ({name}) => {    
    const dispatch = useDispatch();
    const widgetData = JSON.parse(JSON.stringify(data))[name]
    console.log(widgetData)
    let style = {
        backgroundImage: 'url(' + require(`../../resources/${widgetData.img}`) + ')'
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