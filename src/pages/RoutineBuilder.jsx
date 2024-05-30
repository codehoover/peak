import { useState } from "react"
import { fetchData, exerciseOptions } from "../utils/fetchData";

import WeightTracker from "../components/WeightTracker";

export default function RoutineBuilder(){   

    return(
        <div id="routine-builder-container">
            <div id="button-nav">
                <button> Dashboard </button>
                <button> Weight Tracker </button>
                <button> Routine </button>
                <button> Social </button>

            </div>


            <div id="routine-content">
            <WeightTracker/>

            </div>
            

        </div>
    )
}