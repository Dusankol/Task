import React from "react";
import "./popup.scss";

const Popup = ({title,formClosing,children}) =>{

    return(
        <div className="overlay">
                <div className="popupContent">
                    <h3>{title}</h3>
                    {children}
                    <span onClick={formClosing} className="close">X</span>
                </div>
               

            </div>
    )
}

export default Popup;