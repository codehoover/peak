import { useState } from "react"

export default function RoutineBuilder(){

    const [search, setSearch] = useState('');

   
    // async means it is going to take some time to run as it will be fetching large
    // amounts of data , an async function can run in the background 
    // concurrent to the application

    //this function will be pulling data from the golds gym API
    const handleSearch = async () => {
        //check if there already exists something in the search
        if(search){
            // const exerzisesData = await fetchData();
        }

    }
    return(
        <div id="routine-builder-container">

            <div id="routine-builder-instructions">
                <h1> Welcome to the Routine Builder!</h1>
                <p>
                    Here you can build a routine suited to your needs.
                    Use the search bar to find exercises to add to your personalized
                    routine. You can build up to 5 different unique routines and 
                    schedule when you would like to perform each. Have an ab circuit
                    you would like to perform after your leg day? Schedule it in!
                </p>

            </div>

            <div id="routine-builder-search">
                <input placeholder="Search Exercise" value={search} 
                onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
                <button onClick={handleSearch}>Search</button>

            </div>

        </div>
    )
}