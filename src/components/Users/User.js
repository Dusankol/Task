import React from "react";
import "./User.scss";

const User=({firstName,lastName,DOB,id,companyId,companyName,position,phoneNumber,deleteUser,editUser})=>{

    return(
        
            <li>
                <span className="fullName">{firstName+' '+lastName}</span> 
                <span className="dob">{DOB}</span> 
                <span className="companyName">{companyName}</span> 
                <span className="position">{position}</span>
                <div className="buttonWrapper">
                <button onClick={()=>editUser(id)}>Edit</button>
                <button onClick={()=>deleteUser(id)}>Delete</button>
                </div>
            </li>
        
    )
}

export default User;