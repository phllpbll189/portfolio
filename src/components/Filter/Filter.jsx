import { useState } from 'react'
import './Filter.css'

export const Filter = ({ selection, setSelection}) => {
    const [filterVisible, setVisibility] = useState(false)

    let select = (lang) => {
        setSelection({...selection, [lang]: !selection[lang]})
    }


    //need to learn how to do react transitions to get desired effect
    //if I want to animate the filter

    //this is because everytime it changes it completely reloads the root.
    return(
        <>
            <div className='filter'>
                <p onClick={() => setVisibility(!filterVisible)}>Filter</p>
                <div>
                    <button onClick={() => select("Javascript")}>Javascript</button>
                    <button onClick={() => select("C++")}>C++</button>
                    <button onClick={() => select("Java")}>Java</button> 
                </div>
            </div>
        </>
    )
}