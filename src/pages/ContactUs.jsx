import { useState } from "react"
import ContactCard from "../components/ContactCard"

import { FAQ_EXAMPLES } from "../utils/faq_data";

export default function Contact(){

    const [tabfaq, setTabfaq] = useState('');

    function description(arg){
        setTabfaq( arg );
            

    }
    return(
        <div id="contact-page-container">

            <div id="contact-container">

                <div id="contact-us-details">
                    
                    <h1 style={{fontSize:"64px", fontWeight:"500"}}>Contact Us!</h1>

                    <p style={{maxWidth:"350px"}}>
                        Feel free to send us a quick message with your question or
                        inquiry about our product and we'll get back to you as soon
                        as possible!
                    </p>

                    <div id="contact-us-details-2">
                        <div>
                            <span id="bold"> Customer Support </span>
                            <p>
                                Our support team is available to address any
                                concerns or queries you may have.
                            </p>
                        </div>

                        <div>
                            <span id="bold"> Feedback and Suggestions </span>
                            <p>
                                We value your feedback and are continously working to
                                improve Peak. Your input is crucial in shaping the 
                                future of Peak.

                            </p>
                        </div>

                    </div>

                </div>

                <ContactCard/>

            </div>

            <div id="FAQ">

                <div id="FAQ-header">
                    <p style={{fontWeight:"500", fontSize:"20px"}}> FAQ </p>
                    <p style={{fontSize:"46px"}}> Do you have any questions for us? </p>
                    <p> If there are any questions you are looking for the answer to
                        check here first. If you can't find your answer here feel
                        free to shoot us a message!
                    </p>

                </div>

                <div id="faq-tabs">
                    <button id="tab" onClick={() => description('answer1')}>
                        Why use Peak over other competitors?
                    </button>

                    <button id="tab" onClick={() => description('answer2')}>
                        How many routines can I have?
                    </button>

                    <button id="tab" onClick={() => description('answer3')}>
                        Can I personalize my Peak interface?
                    </button>
                </div>

                <div id="faq-answers">
                    <p id="faq-transition-text">{FAQ_EXAMPLES[tabfaq]}</p>
                </div>

            </div>

        </div>
    )
}