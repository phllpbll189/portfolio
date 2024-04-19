import { buildQueries } from '@testing-library/react'
import './Project.css'
export const Project = ({BackImg, Title}) => {

    let style = {
        backgroundImage: 'url(' + require(`../../resources/${BackImg}`) + ')'
    }
    
    return (   
        <div className='proj_container' style={style}>
           <div className='title' >{Title}</div> 
        </div>
    )
}