import './Navbar.css';

export const Navbar = () => {

    return(
        <div className="navbar">
            <span href="/">Home</span>
            <span href="/portfolio" className='disabled'><a href='/portfolio'>Portfolio</a></span>
            <span>Hire</span>
        </div>
    );
}