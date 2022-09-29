import './Greeting.css';

export const Greeting = () => {
    
    return(
        <div className="greeting-section">
            <div className="start">Hello, I am</div>
            <div className="name">Phillip</div>
            <div className="name">Bell</div>
            <div className="introduction">A Fullstack Engineer with a passion for web design.</div>
            <span></span>
            <div className='connect'>connect with me:</div>
            <div className='github-image'>
                <svg src='../../resources/github.svg' className='gitimage'></svg>
                <svg src='../../resources/linkdin.svg' className='linkdimage'></svg>
            </div>
            <svg src='../../resources/self_image_mask.svg' className='self-image-port'/>
        </div>
    )
}