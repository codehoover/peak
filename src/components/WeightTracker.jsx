import { useState } from "react";
import { Chart as Chartjs } from "chart.js/auto";
import { Line } from "react-chartjs-2";

var data_arr = [];

export default function WeightTracker(){
    const [weightData, setWeightData] = useState([])
    const [value, setValue] = useState(null)


    function handleAddWeight(weight){
        if (value === null || value ===""){
            alert("Please enter valid input.")
        }
        else{
            //spreads pre-existing data and adds new data to end of array
            setWeightData([...weightData,weight])
            console.log(weightData)
        }
        //data_arr.push(parseInt(weight));

    }
 

    return(
        <div>
            <h1> Weight Tracker</h1>
            <p>
                Input your daily weight for the week below.
            </p>

            <div id="weight-input">
                
                
                <Line
                
                data={{
                    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    datasets: [
                        {
                            label: "Weight",
                            data: weightData,
                        },
                    ]

                }}
                
                
                />

            </div>

            <div>
                <input id="weight-input-data" placeholder="Enter Weight in lbs" onChange={e => setValue(e.target.value)}/>
                
                <button onClick={() => handleAddWeight(value)}>Add</button>
            </div>
            
        </div>
    )
}