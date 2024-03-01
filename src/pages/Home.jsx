import { Link } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";
import DetailCard from "../components/DetailCard";

import Macro from "../assets/macro-tracking.jpg";
import Personal_Training from "../assets/personal_training.jpg";
import Sleep from "../assets/sleep.jpg";
import Workout_track from "../assets/workout_track.jpg";



export default function Home(){
    return(
        <div id="landing-page-container">
            <HeroBanner/>


            <div id="landing-page-features">
                <h1> Your Journey Your Way</h1>
                <div id="landing-page-card-grid">
                    <DetailCard title={"Track Workouts"}  alt_desc={'Tracking workout'} image={Workout_track}/>
                    <DetailCard title={"Manage Sleep"} alt_desc={'Sleep Image'} image={Sleep}/>
                    <DetailCard title={"Personal Training"} alt_desc={'Personal Training Image'} image={Personal_Training}/>
                    <DetailCard title={"Diet Plan"}  alt_desc={'Diet Plan Image'} image={Macro}/>
                </div>



            </div>

            <div id="landing-page-disclaimer">
                <h1 id="landing-page-disclaimer-header">App Designed For You</h1>
                <p> 
                    All features on the application are free to use.
                    We will never paywall any feature. If you wish to support our
                    team you can do so by donating <Link to="/" style={{color:"white"}}> here </Link>
                </p>
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