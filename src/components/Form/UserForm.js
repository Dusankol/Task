import React,{Component} from "react";
import "./UserForm.scss";

class UserForm extends Component{

    state={
        firstName:"",
        lastName:"",
        id:"",
        companyId:"",
        companyName:"",
        DOB:"",
        position:"",
        phoneNumber:""
    }

    componentDidMount(){
        if(this.props.formData){
            this.setState({
                ...this.props.formData
            })
        }
         this.setOptions();
         var now=new Date();     
    }

    setOptions=()=>{
        let options=JSON.parse(localStorage.getItem("companies"));
        let y=options.map(item=>item.name);
        let select=document.querySelector("#company");
        for(var i=0;i<y.length;i++){
        const newOption = document.createElement('option');
        const optionText = document.createTextNode(y[i]);
        newOption.appendChild(optionText);
        newOption.setAttribute("value",y[i]);
        select.append(newOption)
        }
    }

    limitDate=()=>{
        let now=new Date();
        return now.toISOString().substring(0,10)
    }

    inputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    addUser=()=>{
        const {firstName,lastName,companyName,DOB,position,phoneNumber}=this.state;
        if(firstName&&lastName&&companyName&&DOB&&position&&phoneNumber&&(this.props.formData===null)){
            this.props.submit(this.state)
        }else if(firstName&&lastName&&companyName&&DOB&&position&&phoneNumber&&(this.props.formData!==null)){
            this.props.formEdit(this.state)
        }else{alert("All fields must be filled")}
        
    }

    render(){
        const {firstName,lastName,companyName,DOB,position,phoneNumber}=this.state;
        return(
            <section className="form">
                <label>First Name:<input type="text"
                        value={firstName}
                        name="firstName" 
                        onChange={(e)=>this.inputChange(e)} /></label>
                <label>Last Name:<input type="text"
                        value={lastName}
                        name="lastName"
                        onChange={(e)=>this.inputChange(e)} /></label>
                <label>Company:
                <select name="companyName"
                        id="company" 
                        onChange={(e)=>this.inputChange(e)}>
                    <option></option>
                </select>
                    
                </label>
                <label>Date Of Birth:<input type="date"
                        max={this.limitDate()} 
                        value={DOB}
                        name="DOB" 
                        onChange={(e)=>this.inputChange(e)} /></label>
                <label>Position:
                <select name="position"
                 id="position" 
                 onChange={(e)=>this.inputChange(e)}>
                        <option></option>
                        <option value="Manager">Manager</option>
                        <option value="Software Developer">Software Developer</option>
                        <option value="QA engineer">QA Engeneer</option>
                        <option value="Stuff">Stuff</option>
                    </select>
                </label>
                <label>Phone Number:<input maxLength="9" 
                        minLength="9" 
                        type="text" 
                        value={phoneNumber} 
                        name="phoneNumber" 
                        onChange={(e)=>this.inputChange(e)} /></label>
                <button onClick={this.addUser}>Submit</button>
            </section>

        )
    }
}

export default UserForm;