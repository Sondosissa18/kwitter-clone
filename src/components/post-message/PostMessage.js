import React, { useState } from "react";
import "./PostMessage.css";
import { Button, Card } from "react-bootstrap";

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
      <br />
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>Add New Message</Card.Header>
        <Card.Body>
          <Card.Title>Message</Card.Title>
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
              <button variant="primary">Post</button>
            </form>
          </Card.Text>
          <Button variant="primary">Post</Button>
        </Card.Body>
      </Card>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {console.log(state)}
    </React.Fragment>
  );
};
