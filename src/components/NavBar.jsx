import { 
Link
 } from "react-router-dom";

export default function NavBar(){
    return(
        <div id="navbar-container">

            <div id="navbar-menu">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact Us</Link>
                <Link to="/RoutineBuilder">Routine Builder</Link>
    
            </div>

            <Link to="/Login" id="navbar-login">Login</Link>

        </div>
    )
}