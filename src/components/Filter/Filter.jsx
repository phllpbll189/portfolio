import './Filter.css'

export const Filter = ({ selection, setSelection}) => {
    let select = (num) => {
        if(num in selection){
            setSelection()
        }
    }
    return(
        <>
            <button>Javascript</button>
            <button>C++</button>
            <button>Java</button>
        </>
    )
}