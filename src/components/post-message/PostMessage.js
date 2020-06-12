import React, { useState } from "react";
import "./PostMessage.css";
import { Button, Card, Container } from "react-bootstrap";

export const PostMessage = ({ createMessage, listOfMessages, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    text: "",
  });

  const submitMessage = (event) => {
    event.preventDefault();
    createMessage(state);
    listOfMessages();
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
        <Card border="info" style={{ marginBottom: "20px", width: "35%" }}>
          <Card.Header>Add New Message</Card.Header>
          <Card.Body>
            <Card.Title>Message</Card.Title>
            <hr />
            <Card.Text>
              <form id="message-form" onSubmit={submitMessage}>
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
              </form>
            </Card.Text>
            {/* <button variant="primary">Post</button> */}
            <Button variant="primary">Post</Button>
          </Card.Body>
        </Card>
      </Container>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {console.log(state)}
    </React.Fragment>
  );
};
