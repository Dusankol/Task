import React,{useState} from "react";
import "./Header.scss";
import Nav from "../Nav/Nav";
import WeatherPopup from "../Popup/WeatherPopup";

const Header = () =>{

    const [popupState,setPopupState]=useState({
        showPopup:false
    })

    const getWeatherData=()=>{
        let longitude=20.496729;
        let latitude=44.755572;
        let apiKey="60bbd9f3d0a01e6e4e13e146caf5a7c7";
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(response=>response.json())
        .then(data=>printWeatherData(data))
        .catch( error => alert(`Error: ${error}`));
        }

    const printWeatherData=(data)=>{
        let popup=document.querySelector(".weatherPopup");
        //popup.classList.add("show");
        let temp=document.createElement("p");
        let tempDes=document.createElement("p");
        temp.textContent=(data.main.temp-273.15).toFixed(1)+ "\u00B0C";
        tempDes.textContent=data.weather.map(item=>item.description).toString();
        popup.append(temp,tempDes);
        setPopupState({
            showPopup:true
        })
     }

     const hideWeatherData=()=>{
        setPopupState({
            showPopup:false
        })
        let popup=document.querySelector(".weatherPopup");
        //popup.classList.remove("show");
        popup.textContent="";
     }


    return(
        <header>
            <h3>Management app</h3>
            <div className="navWrapper">
                <Nav />
                <div className="buttonWrapper">
                    <button onMouseOver={getWeatherData}
                     onMouseOut={hideWeatherData}>Weather</button>
                    {popupState && <WeatherPopup />}
                </div>
            </div>
        </header>
    )
}

export default Header;