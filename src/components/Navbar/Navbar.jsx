import './Navbar.css';

export const Navbar = () => {

    return(
        <div className="navbar">
            <span href="/"><a href='/' style={{color: "inherit", textDecoration: 'none'}}>Home</a></span>
            <span href="/portfolio"><a href='/portfolio' style={{color: "inherit", textDecoration: 'none'}}>Portfolio</a></span>
            <span>Hire</span>
        </div>
    );
}