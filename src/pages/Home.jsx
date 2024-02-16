import { Link } from "react-router-dom"


export default function Home(){
    return(
        <div id="landing-page-container">

            <div id="landing-page-header">

                <h1 id="header"> Reach your <span id="peak"> Peak </span> </h1>
                
                <div id="header-desc">
                    <p> Peak is a free to use platform 
                        made to help you reach your goals.
                        Build and track workouts, macros, sleep and more!
                        Find out more about the app <Link to="/About"> here </Link> 
                    </p>

                </div>

            </div>

            <div id="landing-page-disclaimer">
                <h1 id="landing-page-disclaimer-header">Free to use!</h1>
                <p> 
                    All features on the application are free to use.
                    We will never paywall any feature. If you wish to support our
                    team you can do so by donating <Link href="/"> here </Link>
                </p>
            </div>

            <div id="landing-page-features">



            </div>

            <div id="landing-page-info">
                <h1> Need more information?</h1>
                <p>
                    If you need more information on our platform please use the menu.
                    If your question is still not answered feel free to contact us
                    using the form below!
                </p>

            </div>
        </div>
    )
}