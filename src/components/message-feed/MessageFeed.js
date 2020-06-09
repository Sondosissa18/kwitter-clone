import React, { useState, Component } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";


export class MessageFeed extends Component {
    constructor(props){
        super(props);

        
    }

  onListOfMessages = (event) => {
    this.props.onListOfMessages();
  };

  componentDidMount() {
    this.onListOfMessages();
  }
  
  render() {
  return (
    <div id="messageFeed">
      <div id="messages">
        

        
        {console.log(this.props.messages[0])}
        {/*loading && <Loader />*/}
        {/*error && <p style={{ color: "red" }}>{error.message}</p>*/}
      </div>
    </div>
  );
  }
};


/*
export const MessageFeed = ({ listOfMessages, error }) => {
    const [state, setState] = useState({
      message: 100,
    });
  
    const handleMessageList = (event) => {
      //listOfMessages();
    };
  
    
  
    return (
      <div id="messageFeed">
        <div id="messages">
          
          <form onSubmit={handleMessageList()}>
              <button type="submit" />
          </form>
          {/*console.log(handleMessageList)}
          {/*loading && <Loader />}
          {/*error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
      </div>
    );
  };
*/