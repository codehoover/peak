import { useState } from "react"
import { fetchData, exerciseOptions } from "../utils/fetchData";

import WeightTracker from "../components/WeightTracker";
import Dashboard from "../components/Dashboard";
import Routine from "../components/Routine";
import Social from "../components/Social";

export default function RoutineBuilder(){
    const [content, setContent] = useState(<Dashboard/>);

    function handleClick(arg1){
        setContent(arg1);
    }   

    return(
        <div id="routine-builder-container">
            <div id="button-nav">
                <button onClick={() => handleClick(<Dashboard/>)}> Dashboard </button>
                <button onClick={() => handleClick(<WeightTracker/>)}> Weight Tracker </button>
                <button onClick={() => handleClick(<Routine/>)}> Routine </button>
                <button onClick={() => handleClick(<Social/>)}> Social </button>

            </div>


            <div id="routine-content">
                {content}
            </div>
            

        </div>
    )
}