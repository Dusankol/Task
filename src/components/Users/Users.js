import React, {Component, Fragment} from "react";
import "./Users.scss";
import User from "./User";
import Popup from "./../Popup/Popup";
import UserForm from "../Form/userForm";

class Users extends Component{
state={
    users:[],
    openForm:false,
    formData:null
}


componentDidMount(){
    
    this.setState({
        users:JSON.parse(localStorage.getItem("users"))
    })

}

 uuidv4(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  renderUsers(){
      return(
      <ul className="userList">
    {this.state.users.map(user=>{
        return <User deleteUser={this.deleteUser} 
                editUser={this.editUser} 
                firstName={user.firstName}
                lastName={user.lastName} 
                DOB={user.DOB}
                key={user.id} 
                id={user.id} 
                companyId={user.companyId}
                companyName={user.companyName} 
                position={user.position} 
                phoneNumber={user.phoneNumber} />
        
    })}
    </ul>)
  }



  formOpening=()=>{
    this.setState({
        openForm:true
    })    
}

  formClosing=()=>{
    this.setState({
        openForm:false,
        formData:null
    })
  }


  submit=(data)=>{
    data.id=this.uuidv4();
    data.companyId=this.uuidv4();
    let users=JSON.parse(localStorage.getItem("users"));
    users.push(data);
    localStorage.setItem("users",JSON.stringify(users))
    this.setState({
        users:users,
        openForm:false
    })
  }

  deleteUser=(id)=>{
    let updatedUsers=this.state.users.filter(user=> user.id!==id)
    localStorage.setItem("users",JSON.stringify(updatedUsers))
  this.setState({
      users:updatedUsers
  })

}

editUser=(id)=>{
   
    let forEditing=[...this.state.users].find(user=>user.id===id);
    this.setState({
        openForm:true,
        formData:forEditing
    })

}

formEdit=(data)=>{
     let index=this.state.users.findIndex(user=>user.id===data.id);
     let newUsers=[...this.state.users];
     newUsers.splice(index,1,data)
     localStorage.setItem("users",JSON.stringify(newUsers))
     this.setState({
         users:newUsers
     })
    this.formClosing()
   
}

 

render(){

    return(
        <Fragment>
            <div className="userWrapper">
                <h1>Users</h1>
                <button onClick={this.formOpening}>Add</button>
            </div>
                {this.renderUsers()}
                {this.state.openForm && <Popup title="Add user" formClosing={this.formClosing}>
                <UserForm submit={this.submit} 
                            formData={this.state.formData}
                            formEdit={this.formEdit} /></Popup>}

        </Fragment>
        
        
    )

}

}

export default Users;