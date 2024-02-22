import { Link } from "react-router-dom"

export default function HeroBanner(){
    return(
        <div id="hero-banner-container">

            <div id="hero-banner-header">

                <h1 id="header"> Reach your <span id="peak"> Peak </span> </h1>
                
                <div id="header-desc">
                    <p> Peak is a free to use platform 
                        made to help you reach your goals.
                        Build and track workouts, macros, sleep and more!
                    </p>
                    <Link id="hero-banner-about-link-2" to="/SignUp"> Register </Link>  
                    <Link id="hero-banner-about-link" to="/About"> Find out more </Link>
                    
                </div>

            </div>

        </div>
    )
}