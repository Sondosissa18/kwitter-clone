import React from "react";
import ProptTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Menu.css";

export const Menu = ({ isAuthenticated, logout }) => {
  return (
    <div id="menu">
      <h1>Kwitter</h1>
      {isAuthenticated && (
        <div id="menu-links">
          <div>
            <Link to="/profiles/username" style={{}}>
              Profile
            </Link>
          </div>

          <div>
            <Link to="/messagefeed" style={{}}>
              Message Feed
            </Link>
          </div>

          <div>
            <Link
              to="/"
              onClick={logout}
              style={{
                width: "5%",
                float: "right",
                marginLeft: "950px",
                display: "flex",
                flexFlow: "row wrap",
              }}
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

Menu.defaultProps = {
  isAuthenticated: false,
  logout: () => {},
};

Menu.propTypes = {
  isAuthenticated: ProptTypes.bool.isRequired,
  logout: ProptTypes.func.isRequired,
};
