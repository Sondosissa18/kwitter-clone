import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { Container, Button, Row, Col } from "react-bootstrap";

export const LoginForm = ({ login, loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    login(state);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          required
          onChange={handleChange}
        />
        <br />
        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>
      <br />

      <Link to="/signup">
        <>
          <Button
            variant="primary"
            size="1g"
            style={{ marginLeft: "5%", backgroundColor: "gray", size: "px" }}
          >
            SIGN UP
          </Button>{" "}
        </>
      </Link>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}

      {console.log(state)}
    </React.Fragment>
  );
};

LoginForm.propTypes = {
  login: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
