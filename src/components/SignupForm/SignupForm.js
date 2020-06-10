import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import "./LoginForm.css";
import { createUser } from "../../redux/actions/users";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import { MenuContainer } from "../menu";

export const SignupForm = ({ createUser, loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    username: "",
    password: "",
    displayName: "",
  });

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputDispaly = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  const handleSIGNUP = (event) => {
    //todo
    event.preventDefault();
    createUser(state);
  };

  return (
    <React.Fragment>
      <MenuContainer />
      <Container>
        <form id="SIGNUP-form" onSubmit={handleSIGNUP}>
          <Row className="justify-content-start">
            <label htmlFor="username">Username</label>

            <input
              type="text"
              name="username"
              value={state.username}
              autoFocus
              required
              onChange={handleChange}
            />
          </Row>
          <Row className="justify-content-start">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              name="password"
              value={state.password}
              required
              onChange={handleChange}
            />
          </Row>
          <Row className="justify-content-start">
            <label htmlFor="displayName">DisplayName</label>

            <input
              type="displayName"
              name="displayName"
              value={state.displayName}
              required
              onChange={handleChange}
            />
          </Row>
          <Row className="justify-content-start">
            <Button
              // style={{ marginLeft: "5%" }}
              type="submit"
              disabled={loading}
              className="fill-color-blue"
            >
              SIGNUP
            </Button>
          </Row>
        </form>
        {loading && <Loader />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </Container>
    </React.Fragment>
  );
};
