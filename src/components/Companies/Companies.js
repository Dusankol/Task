import React,{Component,Fragment} from "react";
import "./Companies.scss";
import Company from "./Company";
import {Link} from "react-router-dom";


class Companies extends Component{

    state={
        companies:[]
    }

    componentDidMount(){
        this.setState({
            companies:JSON.parse(localStorage.getItem("companies"))
        })
    }

    deleteCompany=(id)=>{
        let companies=JSON.parse(localStorage.getItem("companies"));
        let updatedCompanies=companies.filter(company=>company.id!==id);
        localStorage.setItem("companies", JSON.stringify(updatedCompanies))
        this.setState({
            companies:updatedCompanies
        })
    }

    

    renderCompanies=()=>{
        return(
            <ul className="companyList">
          {this.state.companies.map(company=>{
              return <Company name={company.name} 
                            city={company.city}
                            country={company.country}
                            key={company.id} 
                            id={company.id}
                            deleteCompany={this.deleteCompany}
                 />
              
          })}
          </ul>)

    }

    render(){

        return(
            <Fragment>
                <div className="userWrapper">
                    <h1>Companies</h1>
                    <Link to="/companies/add"><button>Add</button></Link>
                </div>
                {this.renderCompanies()}
            </Fragment>

        )
    }

}

export default Companies;