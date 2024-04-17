import './Filter.css'

export const Filter = ({ selection, setSelection}) => {
    let select = (lang) => {
        setSelection({...selection, [lang]: !selection[lang]})
    }

    return(
        <>
            <div>
                <button onClick={() => select("Javascript")}>Javascript</button>
                <button onClick={() => select("C++")}>C++</button>
                <button onClick={() => select("Java")}>Java</button> 
            </div>
        </>
    )
}