import React,{Component,Fragment} from "react";
import "./CompanyForm.scss";
import Users from "../Users/Users";

class CompanyForm extends Component{

    state={
        name:"",
        city:"",
        country:"",
        id:""
    }

    componentDidMount(){
    
        if(this.props.match.params.id){
        let company=JSON.parse(localStorage.getItem("companies"));
        let y=this.props.match.params.id.substr(1,36);
        let x=company.filter(item=>item.id===y);
       
         this.setState({
             name:x[0].name,
             city:x[0].city,
             country:x[0].country,
             id:x[0].id
        })
    } 
    }

    inputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    uuidv4(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      editCompany=(companies)=>{
        let modId=this.props.match.params.id.substr(1,36);
        let index=companies.findIndex(company=>company.id===modId);
        companies.splice(index,1,this.state)
        localStorage.setItem("companies",JSON.stringify(companies))
        setTimeout(this.eraseState,100)
      }

      addCompany=(companies)=>{
        this.setState({
            id:this.uuidv4()
        },()=>{companies.push(this.state)                
             localStorage.setItem("companies",JSON.stringify(companies))
            } ) 
            setTimeout(this.eraseState,100)
      }

      changeCompany=()=>{
        const{name,city,country}=this.state;
        let companies=JSON.parse(localStorage.getItem("companies"));
      
        if(name&&city&&country&&this.props.match.params.id){
            this.editCompany(companies)
        } else if(name&&city&&country&&(this.props.match.params.id===undefined)){
            this.addCompany(companies)
        }else{alert("All fields must be filled")}
      }

    eraseState=()=>{
        this.setState({
            name:"",
            city:"",
            country:"",
            id:""
        })
    }

render(){
    const{name,city,country}=this.state;
    return(
        <Fragment>
            <div className="topWrapper">
                <h1>Company Form</h1>
                <button onClick={this.changeCompany}>Save</button>
            </div>
            <div className="companyForm">
                <label>Company Name:
                    <input type="text" 
                    name="name"
                    value={name} 
                    onChange={(e)=>this.inputChange(e)}/>
                </label>
                <label>City:
                    <input type="text"
                     name="city"
                      value={city} 
                      onChange={(e)=>this.inputChange(e)}/>
                </label>
                <label>Country:
                    <input type="text" 
                    name="country" 
                    value={country} 
                    onChange={(e)=>this.inputChange(e)}/>
                </label>
                
            </div>
            {this.props.match.params.id?
            <Users /> : null}
            
        </Fragment>
    )
}
}
export default CompanyForm;