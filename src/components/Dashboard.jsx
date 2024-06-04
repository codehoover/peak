import { useState } from "react"
import { ShoppingBagOutlined } from "@mui/icons-material";
import ReactModal from "react-modal";

export default function Dashboard(){
    //initialize empty array of values
    const [groceries, setGroceries] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState();
    const listItems = groceries.map(item => <li> {item} </li>)


    function addGrocery( arg1 ){

        if( arg1 == undefined ){
            alert("Invalid input");    
        }
        else{
            //spread preexisting groceries list and add new arg to end of list
            setGroceries([...groceries,arg1]);
        }
    }



    return(
        <div id="dashboard-container">
            <div>
                <p> Hi, Here Is Your Weekly Outlook </p>
            </div>

            <div id="dashboard-workouts">
                Create a calendar here with highlighted workout days
            </div>

            <div id="grocery-list">
                <button id="shopping-button"
                onClick={() => setIsOpen(true)}> 
                Shopping List <ShoppingBagOutlined/>
                </button>

                <ReactModal
                id="grocery-modal"
                isOpen={isOpen}
                contentLabel="Example Modal"
                ariaHideApp={false}
                onRequestClose={()=> setIsOpen(false)}
                >
                    <p style={{ fontSize:"32px", fontWeight:"500"}}> Shopping List </p>

                    <input 
                    placeholder="Add item to list"
                    value={value}
                    type="text"
                    onChange={e => setValue(e.target.value)}
                    required/>
                    <button onClick={()=>addGrocery(value)}> Add </button>

                    <ul>
                        { listItems }
                    
                    </ul>
                    

                </ReactModal>

            </div>
        </div>
    )
}