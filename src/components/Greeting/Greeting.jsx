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

            <div className='spacer'/>
            
            <div className='img-container'>
                <div className='self-image-port'/>
            </div>

            <div className='img-container rot-1'>
                <div className='skill-container'>
                        <svg className='my-skill-logos react rev-1' src="../../resources/React-logo.svg"/>
                        <svg className='my-skill-logos js rev-1' src="../../resources/JS-logo.svg"/>
                </div>
            </div>

            <div className='img-container rot-2'>
                <div className='skill-container'>
                    <svg className='my-skill-logos C  rev-2' src="../../resources/C-logo.svg"/>
                    <svg className='my-skill-logos DB rev-2' src="../../resources/Database-logo.svg"/>
                </div>
            </div>
            
            <div className='img-container rot-3'>
                <div className='skill-container'>
                    <svg className='my-skill-logos Git rev-3' src="../../resources/React-logo.svg"/>
                    <svg className='my-skill-logos AWS rev-3' src="../../resources/AWS-logo.svg"/>
                </div>
            </div>

            <div className='img-container rot-4'>
                <div className='skill-container'>
                    <svg className='my-skill-logos Java rev-4' src="../../resources/java-logo.svg"/>
                    <svg className='my-skill-logos GCP rev-4' src="../../resources/GCP-logo.svg"/>
                </div>
            </div>

        </div>
    )
}