import { 
Link
 } from "react-router-dom";

import { Dropdown, DropdownButton, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";

export default function NavBar(){
    return(
        <div id="navbar-container">

            <div id="navbar-menu">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact Us</Link>
                <Link to="/RoutineBuilder">Routine Builder</Link>
    
            </div>

            <div id="navbar-right">
                <Link to="/Login" id="navbar-login">Login</Link>
                <Link to="/SignUp" id="navbar-signup">Sign Up</Link>

            </div>


        </div>
    )
}