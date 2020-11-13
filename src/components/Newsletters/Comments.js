// import React,{Fragment,useEffect} from "react";
// import "./Comments.scss";

// const Comments = ({body,name,email,id,postId}) =>{


//     // useEffect(()=>{
//     //     var modal=document.querySelectorAll(".modal");
//     //     var listItems=document.querySelectorAll(".listItem");
//     //     listItems.forEach((element,i)=>{
//     //         element.addEventListener("click",function(){
//     //             modal[i].classList.add("show")
//     //         })
//     //     });
//     // },[])
//     const animation=(event)=>{  
//      console.log(this)
//     }

   
    

//     return(
//         <Fragment>
//             <li className="listItem" onClick={animation} >
//                 <div className="commentName">Email address: <span className="hidden">{email}</span></div>
//                 <p className="commentBody">{body.trim().slice(0,16)+"..."}</p>
//                 <div className="modal">
//                     <p className="name">{name}</p>
//                     <p className="body">{body}</p>
//                 </div>
//             </li>
           
//         </Fragment>
//     )
// }

// export default Comments;

import React,{Fragment,useEffect} from "react";
import "./Comments.scss";

const Comments = ({body,name,email,id,postId}) =>{


    // useEffect(()=>{
    //     var modal=document.querySelectorAll(".modal");
    //     var listItems=document.querySelectorAll(".listItem");
    //     listItems.forEach((element,i)=>{
    //         element.addEventListener("click",function(){
    //             modal[i].classList.add("show")
    //         })
    //     });
    // },[])
    const animation=(event)=>{  
      console.log(event.target.lastElementChild);
      event.target.lastElementChild.classList.toggle("show")
    //  event.stopPropagation();
    //  event.target.classList.toggle("green")
    
    }

   
    

    return(
        <Fragment>
            <li className="listItem" onClick={animation} >
                <div className="commentName">Email address: <span className="hidden">{email}</span></div>
                <p className="commentBody">{body.trim().slice(0,16)+"..."}</p>
                <div className="modal">
                    <p className="name">{name}</p>
                    <p className="body">{body}</p>
                </div>
            </li>
           
        </Fragment>
    )
}

export default Comments;