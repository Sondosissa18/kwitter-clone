import React, { useState, Component } from "react";
import ProptTypes from "prop-types";
import "./AddLike.css";

export const AddLike = ({ addLikeAction, username, messageIdProps, likes, listOfMessages }) => {

  

  const apiRequest = {
    "messageId": messageIdProps
  }

  const toggleLike = (event) => {
    event.preventDefault();
    console.log(apiRequest)
    addLikeAction(apiRequest);
    setTimeout(listOfMessages, 200)
  };


  return (
    <React.Fragment>
      <button onClick={toggleLike}>Like</button>
    </React.Fragment>
  );
};

AddLike.propTypes = {
  addLikeAction: ProptTypes.func.isRequired,
};
