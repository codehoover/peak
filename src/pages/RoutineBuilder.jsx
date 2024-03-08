import { useState } from "react"
import { fetchData, exerciseOptions } from "../utils/fetchData";

import WeightTracker from "../components/WeightTracker";

export default function RoutineBuilder(){

    const [search, setSearch] = useState('');
    const [exercises, setExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([]);

   
    // async means it is going to take some time to run as it will be fetching large
    // amounts of data , an async function can run in the background 
    // concurrent to the application

    //this function will be pulling data from the golds gym API
    const handleSearch = async () => {
        //check if there already exists something in the search
        if(search){
            const exerciseData = await fetchData('https://gym-fit.p.rapidapi.com/exercises/search'
            , exerciseOptions);

            const searchedExercises = exerciseData.filter(

                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.bodyParts.toLowerCase().includes(search)
                

            );

            setSearch('');
            setExercises(searchedExercises);

            console.log(exerciseData);

        }

    }
    return(
        <div id="routine-builder-container">
            <WeightTracker/>

        </div>
    )
}