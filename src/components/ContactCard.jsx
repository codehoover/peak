export default function ContactCard(){
    return(
        <div id="contact-form">
            <div id="contact-form-header">
                <h1 style={{fontWeight:"500"}}> Get in Touch</h1>
                <p> You can reach Us anytime</p>
            </div>

            <div id="contact-form-name">
                
                <input placeholder="First Name"/> 
                <input placeholder="Last Name"/> 

            </div>

            <input placeholder="E-mail Address" style={{marginBottom:"10px"}}/> 
            <textarea placeholder="How can we help?" style={{height:"200px"}}/>

            <button id="submit"> Submit </button>

        </div>
    )
}