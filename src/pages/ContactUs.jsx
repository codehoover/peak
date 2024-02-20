import ContactCard from "../components/ContactCard"

export default function Contact(){
    return(
        <div id="contact-container">

            <div id="contact-us-details">
                
                <h1 style={{fontSize:"64px", fontWeight:"500"}}>Contact Us!</h1>

                <p style={{width:"30%"}}>
                    Feel free to send us a quick message with your question or
                    inquiry about our product and we'll get back to you as soon
                    as possible!
                </p>

                <div id="contact-us-details-2">
                    <p>
                        <span id="bold"> Customer Support </span>
                        <p>
                            Our support team is available to address any
                            concerns or queries you may have.
                        </p>
                    </p>

                    <p>
                        <span id="bold"> Feedback and Suggestions </span>
                        <p>
                            We value your feedback and are continously working to
                            improve Peak. Your input is crucial in shaping the 
                            future of Peak.

                        </p>
                    </p>

                </div>

            </div>

            <ContactCard/>

        </div>
    )
}