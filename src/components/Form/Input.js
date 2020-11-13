import React,{Fragment, useEffect, useState} from "react";
import "./Input.scss";

const Input = ({label,type,name,onInputChange,minLength,maxLength}) => {

    const [state, setstate] = useState("")

    const valueChange=(e)=>{
        setstate(e.target.value)
    }

    useEffect(()=>{
        onInputChange(name,state)
    },[state])


    return (
        <Fragment>
            <label htmlFor={name}>{label}</label>
            <input type={type}
                   name={name}
                   value={state}
                   onChange={valueChange}
                   className="userFormInput"
                   minLength={minLength}
                   maxLength={maxLength}
                    />
        </Fragment>
    )
}

export default Input


