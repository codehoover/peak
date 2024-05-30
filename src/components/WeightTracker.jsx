import { useState } from "react";
import { Chart as Chartjs } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { Add, Check } from "@mui/icons-material";
import ReactModal from "react-modal";



export default function WeightTracker(){
    const [weightData, setWeightData] = useState([]);
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState('');
    const [dateData, setDateData] = useState([]);


    function handleData(arg1, arg2){
        console.log(dateData);
        setWeightData([...weightData,arg1]);
        setDateData([...dateData,arg2]);
    }


    return(
        <div id="weight-container">
            <h1> Weight Tracker</h1>
            <p>
                Input your daily weight for the week below.
            </p>
            <p>
                Tip: When tracking your weight, try and weigh yourself at the same time 
                everyday for consistent/accurate tracking.
            </p>

            <div id="weight-addition-container">
                <button id="weight-button" onClick={() => setIsOpen(true)}> <Add/> </button>
                <p> Add weight </p>


                <ReactModal
                id="weight-modal"
                isOpen={isOpen}
                contentLabel="Example Modal"
                ariaHideApp={false}
                onRequestClose={()=> setIsOpen(false)}
                >
                    <h1> Log Weight </h1>
                    <input placeholder="Enter Weight (lbs)" 
                    value={value} 
                    onChange={e => setValue(e.target.value)}/>

                    <input type="date" placeholder="date" 
                    value={date} 
                    onChange={e => setDate(e.target.value)}/>
                    <button onClick={() => handleData(value,date)}> <Check/> </button>
                </ReactModal>




            </div>

            <div id="weight-input">

                <Line
                
                data={{
                    labels: dateData,
                    
                    datasets: [
                        {
                            label: "Weight",
                            data: weightData,
                            borderColor: 'orange',
                            backgroundColor: '#e75816',
                            hoverBackgroundColor: '#e75816',
                            tension: 0.4
                        },
                    
                    ]

                }}
                
                
                />

            </div>
           
        </div>
    )
}