import { useState } from "react"

export default function WeightTracker(){

    const [weightinput, setWeightInput] = useState([{weight:""}])

    const handleChange = (event,index) => {
        let { name,value } = event.target; //name,value = key,value
        let onChangeValue = [...weightinput]; //spread inputs
        onChangeValue[index][name] = value; //set value equal to name
    }
    return(
        <div>
            <h1> Weight Tracker</h1>
            <p>
                Input your daily weight for the week below.
            </p>
            <div id="weight-input">

            </div>
        </div>
    )
}