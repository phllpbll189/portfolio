import './Greeting.css';

export const Greeting = () => {
    
    return(
        <div className="greeting-section">
            <p className="start">Hello, I am</p>
            <p className="name">Phillip</p>
            <p className="name">Bell</p>
            <p className="introduction">A Fullstack Engineer with a passion for web design.</p>
            <span></span>
            <p className='connect'>connect with me:</p>
            <div className='github-image'>
                <a href='https://github.com/phllpbll189'>
                    <svg  src='../../resources/github.svg' className='gitimage'></svg>
                </a>
                <a href='https://www.linkedin.com/in/phillip-bell-221b27172/'>
                    <svg src='../../resources/linkdin.svg' className='linkdimage'></svg>
                </a>
            </div>

            <div className='spacer'/>
            
            <div className='img-container'>
                <div className='self-image-port'/>
            </div>

            <div className='img-container rot-1' style={{"--deg": 0}}>
                <div className='skill-container'>
                        <svg className='my-skill-logos react rev-1' src="../../resources/React-logo.svg"/>
                        <svg className='my-skill-logos js rev-1' src="../../resources/JS-logo.svg"/>
                </div>
            </div>

            <div className='img-container rot-1' style={{"--deg": 1}}>
                <div className='skill-container'>
                    <svg className='my-skill-logos C  rev-1' src="../../resources/C-logo.svg"/>
                    <svg className='my-skill-logos DB rev-1' src="../../resources/Database-logo.svg"/>
                </div>
            </div>
            
            <div className='img-container rot-1' style={{"--deg": 2}}>
                <div className='skill-container'>
                    <svg className='my-skill-logos Git rev-1' src="../../resources/React-logo.svg"/>
                    <svg className='my-skill-logos AWS rev-1' src="../../resources/AWS-logo.svg"/>
                </div>
            </div>

            <div className='img-container rot-1' style={{"--deg": 3}}>
                <div className='skill-container'>
                    <svg className='my-skill-logos Java rev-1' src="../../resources/java-logo.svg"/>
                    <svg className='my-skill-logos GCP rev-1' src="../../resources/GCP-logo.svg"/>
                </div>
            </div>

        </div>
    )
}