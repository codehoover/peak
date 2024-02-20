export default function ContactCard(){
    return(
        <div id="contact-form">
            <div id="contact-form-header">
                <h2> Get in Touch</h2>
                <p> You can reach Us anytime</p>
            </div>

            <div id="contact-form-name">
                
                <input placeholder="First Name"/> 
                <input placeholder="Last Name"/> 

            </div>

            <input placeholder="E-mail Address" style={{marginBottom:"10px"}}/> 
            <textarea placeholder="Comment or Message" style={{height:"200px"}}/>

            <button id="submit"> Submit </button>

        </div>
    )
}