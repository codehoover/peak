export default function Contact(){
    return(
        <div id="contact-container">

            <div id="contact-us-details">
                
                <h1>Have A Question Or Inquiry? Contact Us!</h1>

                <p>
                    Feel free to send us a quick message with your question or
                    inquiry about our product and we'll get back to you as soon
                    as possible!
                </p>

            </div>

            <div id="contact-form">
                <h2> Contact Us</h2>
                <div id="contact-form-name">
                    
                    <input placeholder="First Name"/> 
                    <input placeholder="Last Name"/> 

                </div>

                <input placeholder="E-mail Address" style={{marginBottom:"10px"}}/> 
                <textarea placeholder="Comment or Message" style={{height:"200px"}}/>

                <button id="contact-form-submit"> Submit </button>

            </div>


        </div>
    )
}