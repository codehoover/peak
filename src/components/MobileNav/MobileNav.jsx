import { useState } from "react";
import { Link } from "react-router-dom";
import HamBurgerMenu from "./HamburgerMenu";
import { House, Info, ContactSupport, Login, PersonAdd } from "@mui/icons-material";

export default function MobileNav(){

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () =>{
        setIsOpen(!isOpen);

    }

    return(
        <div id="hamburger-container">
            <div id="hamburger" onClick={toggleMenu}>
                <HamBurgerMenu/>
            </div>
            {isOpen ? <div id="mobile-navigation">
                <ul>
                    <Link to="/" id="mobile-nav-link"> <House/>Home</Link>
                    <Link to="/About" id="mobile-nav-link"> <Info/>About</Link>
                    <Link to="/Contact" id="mobile-nav-link"> <ContactSupport/>Contact Us</Link>
                    <Link to="/Login" id="mobile-nav-link"> <Login/>Login</Link>
                    <Link to="/SignUp" id="mobile-nav-link"> <PersonAdd/> Sign Up</Link>
                    <Link to="/RoutineBuilder" id="mobile-nav-link"> <PersonAdd/> Routine Builder</Link>
                </ul>
            </div>: null}

        </div>
    )
}