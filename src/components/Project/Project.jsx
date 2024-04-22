import './Project.css'
import { useSelector, useDispatch } from 'react-redux'
import { openWidget, closeWidget } from '../../Redux/widgetSlice'

export const Project = ({name, data}) => {    
    const dispatch = useDispatch();
    const widgetData =  data[name]
   
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