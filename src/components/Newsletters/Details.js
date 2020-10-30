
import React,{Component,Fragment} from "react";
import "./Details.scss";
import Comments from "./Comments";

class Details extends Component{
   
    state={
        
       userId:"",
       id:"",
       title:"",
       body:"",
       comments:[]
    }
    componentDidMount(){
        this.getData();
        this.getComments();
    }

    getData=()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        .then(response=>response.json())
        .then(data=>this.setState({
            userId:data.userId,
            id:data.id,
            title:data.title,
            body:data.body
        }))
        .catch( error => alert(`Error: ${error}`));
    }

    getComments= ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}/comments`)
        .then(response=>response.json())
        .then(data=>this.setState({
            comments:data
        }))
        .catch( error => alert(`Error: ${error}`));
    }

    editPost=()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`, {
             method: 'PUT',
             body: JSON.stringify({
                id: this.state.id,
                       title: this.state.title,
                       body: this.state.body,
                    userId: this.state.userId
             }),
             headers: {
             'Content-type': 'application/json; charset=UTF-8',
             },
         }).then((response) => response.json())
            .then(json=>console.log(json))
            .catch( error => alert(`Error: ${error}`));
    }

    deletePost=()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`, {
                method: 'DELETE',
})
    }

    renderComments= ()=>{
        return(
            <div className="comments">
            <h1>Comments</h1>
            <ul>
                {this.state.comments.map(item=>{
                    return <Comments body={item.body}
                                    email={item.email}
                                    name={item.name}
                                    id={item.id}
                                    postId={item.postId}
                                    key={item.id} />
                })}
            </ul>
            </div>
        )
    }

    inputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div className="details">
                <div className="topElements">
                    <h1>Post details</h1>
                    <div className="postButtons">
                        <button onClick={this.editPost}>Edit</button>
                        <button onClick={this.deletePost}>Delete</button>
                    </div>
                  
                </div>
                <div className="content">
                    <h3>Title</h3>
                    <textarea id="postTitle" name="title" value={this.state.title} onChange={(e)=>this.inputChange(e)} />
                    <h3>Body</h3>
                    <textarea id="postBody" name="body" value={this.state.body} onChange={(e)=>this.inputChange(e)} />
                </div>
                {this.renderComments()}
               
            </div>
            

        )
        }
}

export default Details;

