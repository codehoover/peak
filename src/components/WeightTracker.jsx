import { useState } from "react";
import { Chart as Chartjs } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function WeightTracker(){
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
                            data: [135,140,136,145,140,140,145],
                        },
                    ]

                }}
                
                
                />

            </div>

            <div>
                <input/>
                <button>button</button>
            </div>
            
        </div>
    )
}