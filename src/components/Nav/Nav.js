import React from "react";
import "./Nav.scss";
import {Link} from "react-router-dom";

const Nav = () =>{
    
   

    return(
        <ul className="mainNavigation">
                <Link className="nav" id="users" to="/users"><li>Users</li></Link>
                <Link className="nav" id="companies" to="/companies"><li>Companies</li></Link>
                <Link className="nav" id="newsletters" to="/newsletters"><li>Newsletter</li></Link>
               
        </ul>
    )
}

export default Nav;