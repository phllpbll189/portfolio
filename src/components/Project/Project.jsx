import { buildQueries } from '@testing-library/react'
import './Project.css'
import { useSelector, useDispatch } from 'react-redux'
import { openWidget, closeWidget } from '../../widgetSlice'



export const Project = ({BackImg, Title}) => {
    const dispatch = useDispatch();
    const addTodo = text => {
        return {
          type: 'widget/openWidget',
          payload: text
        }
    }
      
    let style = {
        backgroundImage: 'url(' + require(`../../resources/${BackImg}`) + ')'
    }
    
    return (   
        <div className='proj_container' style={style}>
           <div className='title' >{Title}</div> 
        </div>
    )
}