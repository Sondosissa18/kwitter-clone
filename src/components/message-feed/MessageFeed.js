import React, { Component } from "react";
import { Loader } from "../loader";
import "./MessageFeed.css";
import { PostMessageContainer } from "../post-message/"
import { Container, Row, Col } from "react-bootstrap";

export class MessageFeed extends Component {
  constructor(props) {
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
          
      <PostMessageContainer />
      {this.props.loading && <Loader />}
      {console.log(this.state)}
          {this.props.messages.length > 0 &&
            this.props.messages.map((message) => (
              <div key={message.id}>
                <p>{message.username}</p>
                <p>{message.text}</p>
              </div>
            ))}
          
          {this.props.error && (
            <p style={{ color: "red" }}>{this.props.error.message}</p>
          )}
        </div>
      </div>
    );
  }
}
