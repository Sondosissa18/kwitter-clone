import React, { useState } from "react";
import "./PostMessage.css";
import { Button, Card, Container } from "react-bootstrap";

export const PostMessage = ({
  createMessage,
  listOfMessages,
  loading,
  error,
}) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    text: "",
  });

  const submitMessage = (event) => {
    event.preventDefault();
    createMessage(state);
    setState((prevState) => ({ ...prevState, text: "" }));
    setTimeout(listOfMessages, 200);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <br />
      {/* <br /> */}
      <Container>
        <form id="message-form" onSubmit={submitMessage}>
          <Card
            border="info"
            style={{
              backgroundColor: "#EDF5E1",
              marginBottom: "15px",
              width: "35%",
            }}
          >
            <Card.Header>Add New Message</Card.Header>
            <Card.Body>
              <Card.Title>Message</Card.Title>
              <hr />
              <Card.Text>
                <input
                  type="text"
                  name="text"
                  value={state.text}
                  autoFocus
                  required
                  onChange={handleChange}
                  placeholder=" Type a new message"
                />
                <br />
                <br />
                <Button variant="primary" disabled={loading}>
                  Post
                </Button>
              </Card.Text>

              {/* <Button variant="primary">Post</Button> */}
            </Card.Body>
          </Card>
        </form>
      </Container>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {console.log(state)}
    </React.Fragment>
  );
};
