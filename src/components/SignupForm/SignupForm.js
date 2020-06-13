import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import "./LoginForm.css";
import { createUser } from "../../redux/actions/users";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import { MenuContainer } from "../menu";

export const SignupForm = ({ createUser, loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    username: "",
    password: "",
    displayName: "",
  });

  const handleClick = (event) => {
    window.location.assign = "/";
  };

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

      <Container style={{ marginLeft: "5%" }}>
        <form id="SIGNUP-form" onSubmit={handleSIGNUP}>
          <br />
          <Row className="justify-content-start" style={{ padding: "3px" }}>
            <label htmlFor="username">Username</label>

            <input
              style={{ padding: "3px" }}
              type="text"
              name="username"
              value={state.username}
              autoFocus
              required
              onChange={handleChange}
            />
          </Row>
          <Row className="justify-content-start" style={{ padding: "3px" }}>
            <label htmlFor="password">Password</label>

            <input
              style={{ padding: "3px" }}
              type="password"
              name="password"
              value={state.password}
              required
              onChange={handleChange}
            />
          </Row>
          <Row className="justify-content-start" style={{ padding: "3px" }}>
            <label htmlFor="displayName">DisplayName</label>

            <input
              style={{ padding: "3px" }}
              type="displayName"
              name="displayName"
              value={state.displayName}
              required
              onChange={handleChange}
            />
          </Row>
          <br />
          <Row className="justify-content-start">
            <Button
              variant="outline-secondary"
              // class="btn btn-primary"
              style={{ backgroundColor: "orange", Size: "20px" }}
              type="submit"
              disabled={loading}
              className="fill-color-blue"
            >
              SIGNUP
            </Button>
            <Link to="/">
              <Button variant="outline-secondary">Login Page</Button>
            </Link>
          </Row>
        </form>
        {loading && <Loader />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </Container>
    </React.Fragment>
  );
};
