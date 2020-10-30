import React from "react";
import "./Company.scss";
import {Link} from "react-router-dom";

const Company = ({name,city,country,id,deleteCompany}) =>{

        var Users=JSON.parse(localStorage.getItem("users"));
        var noOfUsers=Users.filter(item=>item.companyName===name);
        
       
       


    return(
        <li>
            <span className="name">{name}</span> 
            <span className="city">{city}</span> 
            <span className="country">{country}</span> 
            <span className="noOfUsers">{noOfUsers.length}</span>
            <Link to={`/companies/:${id}`}><button>Edit</button></Link>
            <button onClick={()=>deleteCompany(id)}>Delete</button>
    </li> 
    )
}

export default Company;