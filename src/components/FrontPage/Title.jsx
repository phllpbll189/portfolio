import './Title.css';

export const Title = () => {
    return(
       <>
        <div className='Front-Page'>
            <h1>Phillip Bell</h1>
            <ellipse className='shadow' id='title'></ellipse>
            <p>A software Engineer with <br />skills in front-end, backend and design</p>
            <button id='Hire_Button'>
                Hire Me
            </button>
        </div>
        </>
    )
}