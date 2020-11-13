import React, {Component, Fragment} from 'react';
import "./App.scss";
import Header from "./components/Header/Header";
import {Route,Switch} from "react-router-dom";
import Users from "./components/Users/Users";
import Companies from './components/Companies/Companies';
import CompanyForm from "./components/Form/CompanyForm";
import Newsletters from './components/Newsletters/Newsletters';
import Details from "./components/Newsletters/Details";
import Home from "./components/Home/Home";


class App extends Component {


	
		componentDidMount(){
			var nav=document.querySelectorAll(".nav");

			nav.forEach(element=>{
				element.addEventListener("click",function(){
					nav.forEach(element=>element.classList.remove("active"));
					this.classList.add("active")
					if(this.previousSibling){
					this.previousSibling.style.borderRight="none"}
				})
			})

			
		}


	render() { 
	
		return (
			<Fragment>
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/users" component={Users} />
						<Route path="/companies" exact component={Companies} />
						<Route path="/companies/add" component={CompanyForm} />
						<Route path="/companies/:id"  component={CompanyForm}/>
						<Route path="/newsletters" exact component={Newsletters} />
						<Route path="/newsletters/:id" component={Details} />
					</Switch>
			</Fragment>
			)
	}

}

export default App;