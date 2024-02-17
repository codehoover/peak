import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div id="footer-wrapper">
            <div id="footer-container">

                <div id="footer-col">
                    <h4> Product</h4>
                    <Link to="/Login" id="footer-link"> Login</Link>

                </div>

                <div id="footer-col">
                    <h4> Company </h4>

                    <Link to="/About" id="footer-link"> About Us</Link>
                    <Link to="/Contact" id="footer-link"> Contact Us</Link>

                </div>

                <div id="footer-col">
                    <h4> Resources </h4>
                    <Link to="https://jeffnippard.com/blogs/news/the-best-science-based-minimalist-workout-plan-under-45-mins" target="_blank" id="footer-link"> Minamalist Workout</Link>
                    <Link to="/Contact" id="footer-link"> Push/Pull/Legs </Link>
                    <Link to="/About" id="footer-link"> 4 day Upper/Lower Split</Link>
                    <Link to="/Contact" id="footer-link"> 5 Day Upper/lower Split</Link>

                </div>


            </div>



        </div>

    )
}