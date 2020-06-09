import React, { Component } from "react";
import { Loader } from "../loader";
import "./MessageFeed.css";

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
          {this.props.messages.length > 0 &&
            this.props.messages.map((message) => (
              <div key={message.id}>
                <p>{message.username}</p>
                <p>{message.text}</p>
              </div>
            ))}

          {this.props.loading && <Loader />}
          {this.props.error && (
            <p style={{ color: "red" }}>{this.props.error.message}</p>
          )}
        </div>
      </div>
    );
  }
}
