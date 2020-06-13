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
      <Container style={{ marginTop: "3%" }}>
        <div id="messageFeed">
          <div id="messages">
            <PostMessageContainer />

            {this.props.messages.length > 0 &&
              this.props.messages.map((message) => (
                <Card
                  style={{
                    margin: "1%",
                    padding: "2%",
                    width: "26%",
                    color: "purple",
                    fontSize: "18px",
                  }}
                >
                  <div key={message.id}>
                    <p>{message.username}</p>
                    <p>{message.text}</p>
                    <p>Likes: {message.likes.length}</p>

                    <AddLikeContainer
                      messageIdProps={message.id}
                      likes={message.likes}
                    />
                  </div>
                </Card>
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
