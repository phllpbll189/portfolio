import { useState } from 'react'
import './Filter.css'

export const Filter = ({ selection, setSelection}) => {
    const [filterVisible, setVisibility] = useState(false)

    let select = (lang) => {
        setSelection({...selection, [lang]: !selection[lang]})
    }

    let changeVis = () => {
        console.log(filterVisible)
        setVisibility(!filterVisible)
    }

    return(
        <>
            <div className='filter'>
                <p onClick={changeVis}>Filter</p>
                <div className={filterVisible ? 'opt show' : 'opt'}>
                    <button onClick={() => select("Javascript")}>Javascript</button>
                    <button onClick={() => select("C++")}>C++</button>
                    <button onClick={() => select("Java")}>Java</button> 
                </div>
            </div>
        </>
    )
}