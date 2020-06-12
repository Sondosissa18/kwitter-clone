import React, { Component } from "react";
import { Loader } from "../loader";
import "./MessageFeed.css";
import { PostMessageContainer } from "../post-message/";
import { AddLikeContainer } from "../add-like";
import { Container, Row, Col, Card } from "react-bootstrap";

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
      <Container style={{ marginTop: "5%" }}>
        <div id="messageFeed">
          <div id="messages">
            <PostMessageContainer />
            <Card style={{ width: "18rem" }}></Card>
            {this.props.messages.length > 0 &&
              this.props.messages.map((message) => (
                <div key={message.id}>
                  <p>{message.username}</p>
                  <p>{message.text}</p>
                  <p>Likes: {message.likes.length}</p>
                  <AddLikeContainer
                    messageIdProps={message.id}
                    likes={message.likes}
                  />
                </div>
              ))}

            {this.props.loading && <Loader />}
            {this.props.error && (
              <p style={{ color: "red" }}>{this.props.error.message}</p>
            )}
          </div>
        </div>
      </Container>
    );
  }
}
