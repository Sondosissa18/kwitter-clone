import React, { useState, Component } from "react";
import ProptTypes from "prop-types";
import "./AddLike.css";


// export class AddLike extends Component {
//     constructor(props) {
//         super(props);

//         this.apiRequest = "messageId: " + this.props.messageId
//     }

//     onSubmitLike = (event) => {
//         // this.props.onSubmitLike(this.props.messageId);
//         // console.log(this.props.messageId)
//         this.props.addLikeAction(this.buildingApiRequest);
//     };

//     buildingApiRequest = () => {
//     const newApiRequest = { messageId: this.props.messageId };
//     return newApiRequest;
//     }

//     render()
//     {
//         // console.log(this.props.messageId)
//         // console.log(this.apiRequest)
        
//         return(
//             <div>
//                 <p>test</p>
//                 <button onClick={this.onSubmitLike}>Like</button>
                
//             </div>
             
            
//         )
//     }
// }




export const AddLike = ({ addLikeAction, username, messageIdProps, likes, listOfMessages }) => {
  // Not to be confused with "this.setState" in classes
  

  const apiRequest = {
    "messageId": messageIdProps
  }

  const toggleLike = (event) => {
    event.preventDefault();
    console.log(apiRequest)
    addLikeAction(apiRequest);
    // console.log(likes[0].username);
    // console.log(username);
    setTimeout(listOfMessages, 500)
  
  };


  return (
    <React.Fragment>
       
      <button onClick={toggleLike}>Like</button>
     
      {/* {console.log(state)} */}
    </React.Fragment>
  );
};

AddLike.propTypes = {
  addLikeAction: ProptTypes.func.isRequired,
};