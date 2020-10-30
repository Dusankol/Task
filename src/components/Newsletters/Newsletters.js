import React,{Component,Fragment} from "react";
import "./Newsletters.scss";
import Newsletter from "./Newsletter";

class Newsletters extends Component{

    state={
        newsletters:[],
    }
    componentDidMount(){   
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>this.colectData(data))
    }

    colectData=(data)=>{
        data.length=10;
        this.setState({
            newsletters:data
        })
    }

    presentData=()=>{
        return(
            this.state.newsletters.map(item=>{
                return <Newsletter key={item.id}
                        id={item.id}
                        title={item.title}
                        body={item.body} />
                    })
        )
        
    }
    render(){

        return(
               <Fragment>
                        <h1 id="postHeadline">Posts:</h1>
                        <div className="posts">
                            {this.presentData()}
                        </div>
                </Fragment>
        )
    }
}

export default Newsletters;