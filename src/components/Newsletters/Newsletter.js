import React from "react";
import "./Newsletter.scss";
import {Link} from "react-router-dom";

const Newsletter=({title,body,id})=>{



    return(
           
                <div className="newsletter" >
                     <Link to={`/newsletters/${id}`}>
                    <p className="tittle">{title}</p>
                    <p className="body">{body}</p>
                    </Link>
                </div>
            
            
    )
}

export default Newsletter;