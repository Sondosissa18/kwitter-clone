import React, { Component } from "react";
import { Loader } from "../loader";
import "./MessageFeed.css";

export class MessageFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
    
  }

  onListOfMessages = (event) => {
    this.props.onListOfMessages();
  };

  onCreateMessages = (event) => {
    this.props.onCreateMessages();
  }

  componentDidMount() {
    this.onListOfMessages();
  }

  handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState((state, props) => ({
      text: inputValue
    }));
  };


  handleMessageSubmit = (event) => {
    event.preventDefault();
    this.onCreateMessages(this.state);
    console.log(this.props);
  };




  render() {
    return (
      <div id="messageFeed">
        <div id="messages">
        <form id="message-submit-form" onSubmit={this.handleMessageSubmit}>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          value={this.state.text}
          autoFocus
          required
          onChange={this.handleChange}
        />
        <button type="submit" disabled={this.props.loading}>
          Post
        </button>
      </form>
      {console.log(this.state.text)}
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
