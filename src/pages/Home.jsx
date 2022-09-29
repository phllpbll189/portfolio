import { Navbar } from "../components/Navbar/Navbar.jsx"
import './Home.css';
import {Greeting} from '../components/Greeting/Greeting.jsx'
import { Circle } from "../components/Circle/Circle.jsx";
import { Experience } from "../components/Experience/Experience.jsx";

export const Home = () => {

    return(
        <>
            <Circle/>
            <div className="container-margins">
                <Navbar/>
                <Greeting/>
                <Experience/>
            </div>
        </>
    )
}