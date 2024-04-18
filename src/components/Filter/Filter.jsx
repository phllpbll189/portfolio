import { useState, useTransition } from 'react'
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


    //need to learn how to do react transitions to get desired effect
    //if I want to animate the filter

    //this is because everytime it changes it completely reloads the root.
    return(
        <>
            <div className='filter'>
                <p onClick={changeVis}>Filter</p>
                <div className={filterVisible ? 'opt' : 'opt show'}>
                    <button onClick={() => select("Javascript")}>Javascript</button>
                    <button onClick={() => select("C++")}>C++</button>
                    <button onClick={() => select("Java")}>Java</button> 
                </div>
            </div>
        </>
    )
}