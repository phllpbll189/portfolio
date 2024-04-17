import { useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import './Portfolio.css'
import { Filter } from '../components/Filter/Filter'
export const Portfolio = () =>{
    let [filter, setFilter] = useState({
        "Javascript": false, 
        "C++": true,
        "Java": false
    })



    let settings = Object.keys(filter).map((lang) => {
        if(filter[lang]){
            return (
                <p>{lang}</p>
            )
        }
    })

    return(
        <>
            <Navbar/>
            <div className='proj_greet'>Projects</div>
            <Filter selection={filter} setSelection={setFilter}/>
            {settings}
            <div className='proj_container'/>
        </>
    )
}

