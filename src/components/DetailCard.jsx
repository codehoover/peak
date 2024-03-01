import { Link } from "react-router-dom";
import link_img from "../assets/link.png";

export default function DetailCard({image,title,link, alt_desc}){
    return(
        <Link to={link} id="detail-card-container">

            <img  id="detail-card-image" src={image} alt={alt_desc} height={400} width={300}/>
            
            <div id="card-link">
                <p>{title}</p>
                <img loading="lazy" src={link_img} alt="link" height={30} width={30}/>
            </div>


        </Link>
    )
}