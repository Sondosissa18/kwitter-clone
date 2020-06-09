import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import "./LoginForm.css";
import { createUser } from "../../redux/actions/users";

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
      <form id="SIGNUP-form" onSubmit={handleSIGNUP}>
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
        <input
          type="displayName"
          name="displayName"
          value={state.displayName}
          required
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          SIGNUP
        </button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

// SignupForm.propTypes = {
//   Signup: ProptTypes.func.isRequired,
//   loading: ProptTypes.bool,
//   error: ProptTypes.string,
// };
