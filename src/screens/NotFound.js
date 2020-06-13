import React from "react";
import { Link } from "react-router-dom";
import pic from "./pic/404-page-medium.jpg";

const NotFound = ({ location }) => (
  <>
    <button>
      <Link
        to="/"
        style={{
          color: "purple",
          fontSize: "30px",
          padding: "5px",
        }}
      >
        Go Home
      </Link>
    </button>
    <img
      src={pic}
      alt="notFound"
      width="1500px"
      height="1000"
      style={{ marginTop: "10px" }}
    />
    <p style={{ textAlign: "center" }}>
      Page not found for {location.pathname}
    </p>
  </>
);

export const NotFoundScreen = NotFound;
