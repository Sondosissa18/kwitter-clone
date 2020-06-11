import React, { useState } from "react";
import "./PostMessage.css";

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
      <form id="message-form" onSubmit={submitMessage}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          name="text"
          value={state.text}
          autoFocus
          required
          onChange={handleChange}
        />
        <button type="submit">
          Post
        </button>
      </form>
     
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {console.log(state)}
    </React.Fragment>
  );
};


